import { getSupabaseServerClient } from '../../supabase.server'
import type { OrganizationTypeValues } from './schema'
import { calculateQRExpiry, generateAttendanceToken, generateRegistrationToken } from '@/lib/qr'
import { generateSlug } from '@/lib/slug'
import { VARS } from '@/consts/varTimes'

export const createOrganizationDB = async (values: OrganizationTypeValues) => {

}
