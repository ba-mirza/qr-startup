import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { registerSchema, RegisterTypeValues } from '@/lib/supabase/actions/auth/schema'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Container } from '@/components/Container'

export const Route = createFileRoute('/_public/auth/register')({
  component: RegisterPage,
})

function RegisterPage() {
  const form = useForm<RegisterTypeValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      bin: '',
      orgName: '',
    },
  })

  const onSubmit = async (data: RegisterTypeValues) => {
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
            <h1 className="text-3xl font-bold text-gray-900">Регистрация</h1>
            <p className="mt-2 text-sm text-gray-600">
              Создайте аккаунт для управления организацией
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Полное имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван Петров" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="ivan@company.kz" {...field} />
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
                      <Input type="password" placeholder="Минимум 6 символов" {...field} />
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
                    <FormLabel>БИН компании</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123456789012"
                        maxLength={12}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <p className="text-xs text-gray-500">12 цифр</p>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="orgName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Наименование ТОО</FormLabel>
                    <FormControl>
                      <Input placeholder="ТОО Компания" {...field} />
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
                className="w-full bg-blue-600 text-white"
                variant="outline"
              >
                {form.formState.isSubmitting ? 'Создание аккаунта...' : 'Зарегистрироваться'}
              </Button>

              <p className="text-center text-sm text-gray-600">
                Уже есть аккаунт?{' '}
                <a href="/auth/login" className="text-blue-600 hover:underline font-medium">
                  Войти
                </a>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  )
}
