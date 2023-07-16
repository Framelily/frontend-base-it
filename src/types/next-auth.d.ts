import type { DefaultSession } from 'next-auth'
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      credit?: number
      displayName?: string
      email?: string
      id?: number
      isAdmin?: boolean
      jti?: string
      phone?: string
      sub?: string
      token?: string
    }
  }
}
