
import { z } from "zod";

export const register01Schema = z.object({
    fullName: z.string().min(1).max(35),
    email: z.string().min(1).max(30).email(),
    phoneNumber: z.string().min(1).max(20),
    password: z.string().min(8).max(20)
    // confirmPassword: z.string().min(8).max(20) 
});




export const register02AboutYouSchema = z.object({
    userName: z.string().min(1).max(15),
    country: z.string().min(1).max(30),
    state_Region: z.string().min(1).max(20),
    city: z.string().min(1).max(20),
    homeAddress: z.string().min(1).max(30) 
});

