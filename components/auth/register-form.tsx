'use client'

import {useState, useTransition} from "react";
import {register} from "@/actions/register";
import {FormError} from "@/components/form-error";
import {Input} from "@/components/ui/input";
import {CardWrapper} from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from '@/schemas'
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {Button} from "@/components/ui/button";
import {FormSuccess} from "@/components/form-success";
export const RegisterForm = () => {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("")

    return (
        <CardWrapper
            headerLabel={"Create an account"}
            backButtonLabel={"Already have an account?"}
            backButtonHref={"/auth/login"}
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder={'John Doe'}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder={'john.doe@example.com'}
                                        disabled={isPending}
                                        type={'email'}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder={'******'}
                                        disabled={isPending}
                                        type={'password'}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <div>
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full"
                        >
                           Create an account
                        </Button>
                    </div>
                </form>
            </Form>
        </CardWrapper>
    )
}