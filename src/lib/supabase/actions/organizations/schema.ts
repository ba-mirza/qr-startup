import { z } from 'zod';

export const organizationSchema = z.object({
  title: z.string().min(2, {
    message: 'Organization name must be at least 2 characters.',
  }),
  bin: z.string().length(12, {
    message: 'БИН must be exactly 12 digits.',
  }).regex(/^\d+$/, {
    message: 'БИН must contain only digits.',
  }),
  city: z.string().min(2, {
    message: 'City must be at least 2 characters.',
  }),
  address: z.string().min(5, {
    message: 'Address must be at least 5 characters.',
  }),
  employees: z.number().min(1, {
    message: 'Number of employees must be at least 1.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
})

export type OrganizationTypeValues = z.infer<typeof organizationSchema>
