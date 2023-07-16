import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import jwt from 'jsonwebtoken'
import router from 'next/router'

import WebService from '@/services/modules/Web'
import type { IUserData } from '@/types/modules/Auth'

export const authOptions: NextAuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: 'credentials',
    //   credentials: {
    //     email: { label: 'Email', type: 'text' },
    //     password: { label: 'Password', type: 'password' },
    //   },
    //   async authorize(credentials, req) {
    //     const { email, password } = credentials
    //     const body = { email: email, password: password }
    //     try {
    //       const data = await WebService.login({ ...body })
    //       const userData = jwt.decode(data.token) as IUserData
    //       const res = { ...data, ...userData }
    //       return res
    //     } catch (err) {
    //       router.push('/login')
    //     }
    //   },
    // }),
  ],
  pages: {
    // signIn: '/login',
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   return { ...token, ...user }
    // },
    // async session({ session, token }) {
    //   session.user = token
    //   return session
    // },
  },
}

export default NextAuth(authOptions)
