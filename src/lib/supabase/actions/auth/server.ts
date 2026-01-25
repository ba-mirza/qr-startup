import { getSupabaseServerClient } from "../../supabase.server"
import type { LoginTypeValues, RegisterTypeValues } from "./schema"

const sb = getSupabaseServerClient()

export const registerNewAccountDB = async (values: RegisterTypeValues) => {

  const { email, password, ...otherData } = values;

  const { data: { user }, error: userError } = await sb.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      data: otherData,
    },
  })

  if (userError) {
    throw new Error(`Failed with registration: ${userError.message}`)
  }

  return user
}

export const signUpDB = async (values: LoginTypeValues) => {
  const { data: { user }, error: userError } = await sb.auth.signInWithPassword({
    email: values.email,
    password: values.password
  })

  if (userError) {
    throw new Error(`Failed with sign in: ${userError.message}`)
  }

  return user
}
