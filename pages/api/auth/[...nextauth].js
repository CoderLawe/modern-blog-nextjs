import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET
            
          }),
        //   // Passwordless / email sign in
        //   EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        //   }),
    ],

    secret:process.env.SECRET,


    pages:{
        signIn:"/auth/signin",

    }
    // theme: {
    //     colorScheme: "auto", // "auto" | "dark" | "light"
    //     brandColor: "#A2644F", // Hex color value
    //     logo: "https://cdn.discordapp.com/attachments/817048198022430761/948579130344079360/pexels-rakicevic-nenad-1262304.jpg" // Absolute URL to logo image
    //   }
})