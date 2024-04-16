'use client'
import React from 'react'
import Link from "next/link";
import {navLinks} from "@/constants";
import ModeToggle from "@/components/shared/mode-toggle";
import GlobalSearch from "@/app/(root)/_components/global-search";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Mobile from "@/app/(root)/_components/mobile";
import { BookOpen } from 'lucide-react';
import {Button} from "@/components/ui/button";


function Navbar() {
    const pathName = usePathname()
    return (
        <div className={"h-[10vh] backdrop-blur-sm border-b  z-40 inset-0 bg-background"}>
            <div className={" container max-w-screen-1xl mx-auto h-[10vh] w-full flex items-center justify-between"}>
                {/*Logo*/}
                <Link href={"/"} className={"flex items-center gap-2"}>
                    <BookOpen className={"w-7 h-7 text-orange-500"}/>
                    <h1 className={"text-3xl font-creteRound"}>EduPress</h1>
                </Link>
                {/*	Nav links*/}
                <div className={'gap-2 hidden md:flex'}>
                    {navLinks.map(nav => (
                        <Link
                            href={nav.route}
                            key={nav.route}
                            className={cn("text-xl hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors",
                                pathName === nav.route && 'text-blue-400'
                            )}
                        >
                            {nav.name}
                        </Link>
                    ))}
                </div>
                {/*<div className={"gap-3 flex items-center max-sm:hidden"}>*/}
                {/*    <Link href={"/sign-up"}><Button className={"bg-none"}>Login / Register</Button></Link>*/}
                {/*    <div className={"text-center rounded-full border-2 border-orange-500 pt-1 pb-1"}>*/}
                {/*        <GlobalSearch/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*	Search*/}
                <div className={"gap-1 flex items-center"}>
                    <GlobalSearch/>
                    <ModeToggle/>
                    <Mobile/>
                </div>
            </div>
        </div>
    )
}

export default Navbar