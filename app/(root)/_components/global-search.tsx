'use client'
import {Badge} from '@/components/ui/badge'
import { Sticker } from 'lucide-react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from '@/components/ui/drawer'
import {Input} from '@/components/ui/input'
import {Loader2, Minus, Search} from 'lucide-react'
import Link from 'next/link'
import {ChangeEvent, useState} from "react";
import {ICourse} from "@/types";
import {getSearchCourses} from "@/service/blog.service";
import {debounce} from "lodash";
import SearchCard from "@/components/cards/search";
import {Separator} from "@/components/ui/separator";

function GlobalSearch() {
    const [isLoading, setIsLoading] = useState(false)
    const [courses, setBlogs] = useState<ICourse[]>([])
    const handeSearch = async (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.toLowerCase()

        if (text && text.length > 2) {
            setIsLoading(true)
            const data = await getSearchCourses(text)
            setBlogs(data)
            setIsLoading(false)
        } else {
            setBlogs([])
            setIsLoading(false)
        }
    }

    const debounceSearch = debounce(handeSearch, 500)

    return (
        <Drawer>
            <DrawerTrigger>
                <div
                    className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
                    <span className='hidden md:flex'>Search</span>
                    <Search className='w-4 h-4'/>
                </div>
            </DrawerTrigger>
            <DrawerContent className={"bg-gradient-to-r from-yellow-200 via-yellow-200 to-teal-200"}>
                <div className='container max-w-6xl mx-auto py-12 '>
                    <h1 className={"text-3xl font-creteRound mb-5 flex text-black"}>Search Courses <Sticker className={"w-[50px] h-[35px]"}/></h1>
                    <Input
                        className='bg-secondary'
                        placeholder='Type to search course...'
                        onChange={debounceSearch}
                        disabled={isLoading}
                    />
                    {isLoading && <Loader2 className={'animate-spin mt-4 mx-auto py-12'}/>}
                    {courses.length ?
                        <div className={'text-2xl font-creteRound mt-8 text-black'}>{courses.length} Results Found</div> : null}
                    <div className={'mt-10 grid xl:grid-cols-4 md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-2'}>
                        {courses && courses.map(course => <SearchCard key={course.slug} {...course}/>)}
                    </div>
                    {courses.length ?<Separator className={'mt-3'} /> : null}
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default GlobalSearch
