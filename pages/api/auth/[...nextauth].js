import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      jwt: {
        signingKey: {"kty":"oct","kid":"--","alg":"HS256","k":"--"},
        verificationOptions: {
          algorithms: ["HS256"]
        }
      }
    }),
  ],
  secret: process.env.JWT_SECRET,
});
