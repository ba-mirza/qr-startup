import { createServerFn } from '@tanstack/react-start'
import { organizationSchema } from './schema'
import { createOrganizationDB } from './server'

export const createOrganizationFn = createServerFn({ method: 'POST' })
  .inputValidator(organizationSchema)
  .handler(async ({ data: payload }) => {
    try {
      const result = await createOrganizationDB(payload)
      return result
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to create organization')
    }
  })
