'use server'

import {db} from '@/lib/db'
import bcrypt from 'bcrypt'
import * as z from "zod"
import { RegisterSchema } from "@/schemas";
import {getUserByEmail} from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)

    if(!validatedFields.success){
        return {error: 'Invalid Fields!'}
    }

    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser =  await getUserByEmail(email)

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    if(existingUser){
        return {error: 'Email already exists!'}
    }

    // TODO: Send verification token email!

    return {success: 'User created!'}
}