import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    adapter: PrismaAdapter(prisma)
})