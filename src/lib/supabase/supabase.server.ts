import { createServerClient } from '@supabase/ssr';
import { getCookies, setCookie } from '@tanstack/react-start/server'
import type { Database } from '@/types/database.types';

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_ANON_KEY

export function getSupabaseServerClient() {
  if (!url || !key) {
    console.error('Missing env vars:', { url: !!url, key: !!key })
    throw new Error('Supabase env variables are missing on server!')
  }

  return createServerClient(
    url,
    key,
    {
      cookies: {
        getAll() {
          return Object.entries(getCookies()).map(([name, value]) => ({
            name,
            value,
          }))
        },
        setAll(cookies) {
          cookies.forEach((cookie) => {
            setCookie(cookie.name, cookie.value)
          })
        },
      },
    });
}

export async function getSafeSession() {
  const db = getSupabaseServerClient();

  const {
    data: { session },
  } = await db.auth.getSession();
  if (!session) {
    return { session: null, user: null, supabase: null, error: 'No session found' };
  }

  const {
    data: { user },
    error: userError,
  } = await db.auth.getUser();
  if (userError) {
    return { session, user: null, supabase: null, error: userError.message };
  }

  return { session, user, db, error: null };
}
