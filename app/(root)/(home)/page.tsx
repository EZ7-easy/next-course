import React from 'react'
import {Button} from "@/components/ui/button";
import {CarouselSize} from "@/app/(root)/_components/carousel";
import {getCourses} from "@/service/blog.service";

async function HomePage() {
    const courses = await getCourses()
    console.log(courses)
    return (
        <div className={"bg-[url('/img/hero.png')] bg-no-repeat bg-cover"}>
            <div
                className={"h-[500px] pb-[100px] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8"}>
                <div className={"mt-[110px]"}>
                    <h1 className={"text-4xl text-black"}>Build Skills with <br/> Online Course</h1>
                    <p className={"text-sm text-grey dark:text-black mt-3"}>
                        We denounce with righteous indignation and dislike men who are <br/> so beguiled and demoralized
                        that cannot trouble. </p>
                    <Button className={"bg-orange-500 dark:text-white rounded-full mt-5"}>Post Comment</Button>
                </div>
            </div>
        </div>
    )
}

export default HomePage