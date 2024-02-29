import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/app/models/User";
import { connectMongoDB } from "../../../../../lib/mongodb";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    secret: process.env.SECRET,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      CredentialsProvider({
        name: "Credentials",
        id: 'credentials',
        credentials: {
          username: { label: "Email", type: "email", placeholder: "test@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const email = credentials?.email;
          const password = credentials?.password;
          await connectMongoDB();
          const user = await User.findOne({email});
          const passwordOk = user && bcrypt.compareSync(password, user.password);
          if (passwordOk) {
            return user;
          }
          return null;
        }
      })
    ]
})

export { handler as GET, handler as POST }