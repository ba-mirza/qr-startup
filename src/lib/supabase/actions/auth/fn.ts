import { createServerFn } from '@tanstack/react-start'
import { getSafeSession } from '../../supabase.server'

export const ensureOwnerRecord = createServerFn({ method: 'POST' })
  .handler(async () => {
    const { user, db } = await getSafeSession()

    if (!user) {
      throw new Error('Unauthorized')
    }

    const { data: existing } = await db
      .from('owners')
      .select('id')
      .eq('auth_user_id', user.id)
      .single()

    if (existing) {
      return { success: true, exists: true }
    }

    const { error } = await db
      .from('owners')
      .insert({
        auth_user_id: user.id,
        email: user.email!,
        full_name: user.user_metadata?.full_name || user.email!.split('@')[0],
        organization_id: null,
      })

    if (error) throw new Error(error.message)

    return { success: true, exists: false }
  })
