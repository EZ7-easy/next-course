import React from 'react'
import {Button} from "@/components/ui/button";
import {getCourses} from "@/service/blog.service";
import BlogCard from "@/components/cards/blog";
import Category from "@/components/cards/category";
import Link from "next/link";

async function HomePage() {
    const courses = await getCourses()
    return (
        <>
            <div className={"bg-[url('/img/hero.png')] bg-no-repeat bg-cover"}>
                <div
                    className={"h-[500px] pb-[100px] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8"}>
                    <div className={"mt-[110px]"}>
                        <h1 className={"text-4xl text-black"}>Build Skills with <br/> Online Course</h1>
                        <p className={"text-sm text-grey dark:text-black mt-3"}>
                            We denounce with righteous indignation and dislike men who are <br/> so beguiled and
                            demoralized
                            that cannot trouble. </p>
                        <Button className={"bg-orange-500 dark:text-white rounded-full mt-5"}>Post Comment</Button>
                    </div>
                </div>
            </div>
            <div className={"mt-8"}>
                <Category/>
            </div>
            <div>
                <div className={"mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex mb-7"}>
                    <div className={""}>
                        <h1 className={"text-3xl"}>Features Courses</h1>
                        <p className={"mt-3"}>Explore our Popular Categories</p>
                    </div>
                    <div className={"max-sm:hidden mt-auto"}>
                        <Button className={"bg-orange-500 dark:text-white rounded-full"}>All Categories</Button>
                    </div>
                </div>
                <div
                    className='max-w-screen-2xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4 max-sm:grid-cols-1'>
                    {courses.map(course => (
                        <BlogCard key={course.title} {...course} />
                    ))}
                </div>
                <div className={"mt-10 max-w-screen-2xl mx-auto bg-[url('/img/group.png')] bg-no-repeat bg-cover rounded-3xl h-[400px]"}>
                    <div className={"pt-[110px] pl-7"}>
                        <h1 className={"text-md"}>
                            GET MORE POWER FROM
                        </h1>
                        <h1 className={"text-4xl mt-3"}>
                            <strong>LearnPress Add-Ons</strong>
                        </h1>
                        <p className={"mt-6"}>
                            The next level of LearnPress - LMS WordPress Plugin. More <br/> Powerful, Flexible and
                            Magical Inside.
                        </p>
                        <Link href={"/courses"}><Button className={"bg-orange-500 rounded-3xl mt-4"}>Explorer Course</Button></Link>
                    </div>
                </div>
                <div className={" mt-10 max-w-screen-2xl mx-auto grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
                    <div className={"text-center mx-auto bg-slate-200 w-[370px] h-[250px] rounded-xl p-5"}>
                        <div className={"mt-[60px]"}>
                            <h1 className={"text-5xl text-orange-500"}>25K+</h1>
                            <p className={"text-xl text-black dark:text-white mt-3"}>
                                Active Student
                            </p>
                        </div>
                    </div>
                    <div className={"text-center mx-auto bg-slate-200 w-[370px] h-[250px] rounded-xl p-5"}>
                        <div className={"mt-[60px]"}>
                            <h1 className={"text-5xl text-orange-500"}>899</h1>
                            <p className={"text-xl text-black dark:text-white mt-3"}>
                                Total Courses
                            </p>
                        </div>
                    </div>
                    <div className={"text-center mx-auto bg-slate-200 w-[370px] h-[250px] rounded-xl p-5"}>
                        <div className={"mt-[60px]"}>
                            <h1 className={"text-5xl text-orange-500"}>158</h1>
                            <p className={"text-xl text-black dark:text-white mt-3"}>
                                Instructor
                            </p>
                        </div>
                    </div>
                    <div className={"text-center mx-auto bg-slate-200 w-[370px] h-[250px] rounded-xl p-5"}>
                        <div className={"mt-[60px]"}>
                            <h1 className={"text-5xl text-orange-500"}>100%</h1>
                            <p className={"text-xl text-black dark:text-white mt-3"}>
                                Satisfaction Rate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage