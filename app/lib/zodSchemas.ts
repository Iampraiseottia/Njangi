
import { z } from "zod";

export const register01Schema = z.object({
    fullName: z.string().min(1).max(35),
    email: z.string().min(1).max(30).email(),
    userName: z.string().min(1).max(12) ,
    phoneNumber: z.string().min(1).max(20),
    password: z.string().min(8).max(20)
});


export const resetVerify = z.object({
    resetEmail: z.string().min(1).max(30).email(),
    resetPhoneNumber: z.string().min(1).max(20)
})

