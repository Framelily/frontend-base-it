import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'

export const authOptions: NextAuthOptions = {
  providers: [],
}

export default NextAuth(authOptions)
