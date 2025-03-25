import { z } from "zod";

export const register01Schema = z.object({
    fullName: z.string().min(1, 'Full name is required').max(35, 'Full name must not exceed 35 characters'),
    email: z.string().min(1, 'Email is required').max(30, 'Email must not exceed 30 characters').email('Invalid email format'),
    userName: z.string().min(1, 'Username is required').max(12, 'Username must not exceed 12 characters'),
    phoneNumber: z.string().min(1, 'Phone number is required').max(20, 'Phone number must not exceed 20 characters'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(20, 'Password must not exceed 20 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
});
