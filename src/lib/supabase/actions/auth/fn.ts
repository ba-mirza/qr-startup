import { createServerFn } from "@tanstack/react-start";
import { loginSchema, registerSchema } from "./schema";

export const registerNewAccountFn = createServerFn({ method: 'POST' })
  .inputValidator(registerSchema)
  .handler(async ({ data: payload }) => {
    try {
      console.log(payload)
      return Promise.resolve(payload.fullName)
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to register a new account')
    }
  })

export const signInFn = createServerFn({ method: 'POST' })
  .inputValidator(loginSchema)
  .handler(async ({ data: payload }) => {
    try {
      console.log(payload)
      return Promise.resolve(payload.email)
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Failed to sign in account')
    }
  })
