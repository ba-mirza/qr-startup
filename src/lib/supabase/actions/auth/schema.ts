import z from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(2, 'Минимум 2 символа').max(100, 'Максимум 100 символов'),
  email: z.string(),
  password: z.string().min(6, 'Минимум 6 символов'),
  bin: z.string().length(12, 'БИН должен содержать 12 цифр').regex(/^\d+$/, 'Только цифры'),
  orgName: z.string().min(3, 'Минимум 3 символа').max(200, 'Максимум 200 символов'),
})

export type RegisterTypeValues = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, 'Введите пароль'),
})

export type LoginTypeValues = z.infer<typeof loginSchema>
