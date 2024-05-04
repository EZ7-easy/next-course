'use client'

import {useState, useTransition} from "react";
import {login} from "@/actions/login";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {Input} from "@/components/ui/input";
import {CardWrapper} from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from '@/schemas'
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
export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    const [isPending, startTransition] = useTransition()
    const [success, setSuccess] = useState<string | undefined>("")
    const [error, setError] = useState<string | undefined>("")

    return (
        <CardWrapper
            headerLabel={"Welcome back"}
            backButtonLabel={"Don't have an account?"}
            backButtonHref={"/auth/register"}
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
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
                            Login
                        </Button>
                    </div>
                </form>
            </Form>
        </CardWrapper>
    )
}