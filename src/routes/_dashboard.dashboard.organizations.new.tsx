import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { ArrowLeftIcon, Building2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { OrganizationTypeValues } from '@/lib/supabase/actions/organizations/schema'
import { Container } from '@/components/Container'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { organizationSchema } from '@/lib/supabase/actions/organizations/schema'
import { createOrganizationFn } from '@/lib/supabase/actions/organizations/fn'

export const Route = createFileRoute('/_dashboard/dashboard/organizations/new')({
  component: CreateOrganizationPage,
})

function CreateOrganizationPage() {
  const navigate = useNavigate()

  const form = useForm<OrganizationTypeValues>({
    resolver: zodResolver(organizationSchema),
    defaultValues: {
      title: '',
      bin: '',
      city: '',
      address: '',
      employees: 0,
      description: '',
    },
  })

  const onSubmit = async (values: OrganizationTypeValues) => {
    await createOrganizationFn({ data: values })
    await new Promise(resolve => setTimeout(resolve, 1500))

    navigate({ to: '/dashboard/organizations' })
  }

  return (
    <Container>
      <div className="mt-5 mb-5 max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate({ to: '/dashboard/organizations' })}
        >
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to Organizations
        </Button>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm mt-2">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2Icon className="text-blue-600" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create Organization</h1>
                <p className="text-sm text-gray-500 mt-1">Fill in the details to register your organization</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter organization name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>БИН (Business Identification Number)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter 12-digit БИН"
                          maxLength={12}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        12-digit identification number for legal entities in Kazakhstan
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter city" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="employees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            placeholder="Enter number of employees"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Legal Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter legal address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter organization description"
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Brief description of your organization and its activities
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate({ to: '/dashboard/organizations' })}
                    disabled={form.formState.isSubmitting}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {form.formState.isSubmitting ? 'Creating...' : 'Create Organization'}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}
