import { getSafeSession } from '../../supabase.server'
import type { OrganizationTypeValues } from './schema'
import { calculateQRExpiry, generateAttendanceToken, generateRegistrationToken } from '@/lib/qr'
import { generateSlug } from '@/lib/slug'
import { VARS } from '@/consts/varTimes'

export async function createOrganizationInDB(input: OrganizationTypeValues) {
  const { user, db } = await getSafeSession()

  if (!user) {
    throw new Error('Unauthorized')
  }

  const { data: existingOwner } = await db
    .from('owners')
    .select('organization_id')
    .eq('auth_user_id', user.id)
    .single()

  if (existingOwner?.organization_id) {
    throw new Error('You already have an organization')
  }

  const checkSlugExists = async (slug: string) => {
    const { data } = await db
      .from('organizations')
      .select('id')
      .eq('slug', slug)
      .single()
    return !!data
  }

  let slug = generateSlug(input.title)
  let counter = 1

  while (await checkSlugExists(slug)) {
    slug = `${generateSlug(input.title)}-${counter}`
    counter++
  }

  const { data: organization, error: orgError } = await db
    .from('organizations')
    .insert({
      name: input.title,
      slug,
      industry: input.city,
      employee_count: input.employees,
      description: input.description,
      created_by: user.id,
      settings: {
        geolocation_required: false,
        geolocation_radius: 50,
        work_start_time: VARS.WORK_START_TIME,
        work_end_time: VARS.WORK_END_TIME,
      },
      attendance_qr_token: generateAttendanceToken(user.id),
    })
    .select('id, name, slug, attendance_qr_token')
    .single()

  if (orgError) throw new Error(orgError.message)

  const { error: ownerError } = await db
    .from('owners')
    .update({ organization_id: organization.id })
    .eq('auth_user_id', user.id)

  if (ownerError) throw new Error(ownerError.message)

  const registrationToken = generateRegistrationToken(organization.id)
  const expiresAt = calculateQRExpiry(VARS.WORK_END_TIME)

  const { error: qrError } = await db
    .from('registration_qr_codes')
    .insert({
      organization_id: organization.id,
      token: registrationToken,
      expires_at: expiresAt.toISOString(),
      is_active: true,
    })

  if (qrError) throw new Error(qrError.message)

  const { error: addressError } = await db
    .from('organization_addresses')
    .insert({
      organization_id: organization.id,
      name: input.address,
      is_active: true,
    })

  if (addressError) throw new Error(addressError.message)

  return {
    id: organization.id,
    name: organization.name,
    slug: organization.slug,
    registrationToken,
    attendanceToken: organization.attendance_qr_token!,
  }
}
