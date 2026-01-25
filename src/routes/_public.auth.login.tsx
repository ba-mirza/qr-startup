import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { loginSchema, LoginTypeValues } from '@/lib/supabase/actions/auth/schema'
import { Container } from '@/components/Container'

export const Route = createFileRoute('/_public/auth/login')({
  component: LoginPage,
  validateSearch: (search: Record<string, unknown>) => ({
    registered: search.registered === true,
  }),
})

function LoginPage() {
  const { registered } = useSearch({ from: '/_public/auth/login' })

  const form = useForm<LoginTypeValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginTypeValues) => {
    console.log(data)
    try {
    } catch (err) {
    }
  }

  return (
    <Container>
      <div className="mt-10 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-lg border">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Вход</h1>
            <p className="mt-2 text-sm text-gray-600">
              Войдите в систему управления
            </p>
          </div>

          {registered && (
            <Alert className="bg-green-50 text-green-900 border-green-200">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                Аккаунт создан! Проверьте email для подтверждения.
              </AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="ivan@company.kz"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••"
                        autoComplete="current-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/*{error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}*/}

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full"
              >
                {form.formState.isSubmitting ? 'Вход...' : 'Войти'}
              </Button>

              <p className="text-center text-sm text-gray-600">
                Нет аккаунта?{' '}
                <a href="/auth/register" className="text-blue-600 hover:underline font-medium">
                  Зарегистрироваться
                </a>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  )
}
