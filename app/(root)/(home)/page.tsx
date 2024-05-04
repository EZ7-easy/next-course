import React from 'react'
import {Button} from "@/components/ui/button";
import {getCourses} from "@/service/blog.service";
import BlogCard from "@/components/cards/blog";
import Category from "@/components/cards/category";
import Link from "next/link";
import vector from "@/public/img/vector.png";
import Img from "next/image";
import img1 from "@/public/img/001.png";
import {LoginButton} from "@/components/auth/login-button";

async function HomePage() {
    const courses = await getCourses()
    return (
        <>
            <div className={"bg-[url('/img/hero.png')] dark:bg-[url('/img/hero1.jpg')] bg-cover bg-center"}>
                <div
                    className={"h-[500px] pb-[100px] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8"}>
                    <div className={"mt-[110px]"}>
                        <h1 className={"text-4xl text-black dark:text-white"}>Build Skills with <br/> Online Course</h1>
                        <p className={"text-sm text-grey dark:text-white     mt-3"}>
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
                    className='max-w-screen-2xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-10 max-sm:grid-cols-1'>
                    {courses.map(course => (
                        <BlogCard key={course.title} {...course} />
                    ))}
                </div>
                <div
                    className={"text-black mt-10 max-w-screen-2xl mx-auto bg-[url('/img/group.png')] bg-no-repeat bg-cover rounded-3xl h-[400px]"}>
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
                        <Link href={"/courses"}><Button className={"bg-orange-500 rounded-3xl mt-4"}>Explorer
                            Course</Button></Link>
                    </div>
                </div>
            </div>
            <div
                className={"mt-[80px] max-w-screen-2xl mx-auto grid xl:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:justify-between"}>
                <Img src={vector} alt={"vector"} className={"bg-cover md:mx-auto"}/>
                <div className={"mt-auto md:mx-auto md:mt-10"}>
                    <h1 className={"text-4xl"}>Grow us your skill <br/> with LearnPress LMS</h1>
                    <p className={"text-md mt-6"}>
                        We denounce with righteous indignation and dislike men who are <br/> so beguiled and demoralized
                        that cannot trouble.
                    </p>
                    <ul className={"text-lg mt-3 space-y-2"}>
                        <li className={"ml-5"}>Certification</li>
                        <li className={"ml-5"}>Certification</li>
                        <li className={"ml-5"}>Certification</li>
                        <li className={"ml-5"}>Certification</li>
                    </ul>
                    <Link href={"/courses"}><Button className={"bg-orange-500 rounded-3xl mt-4"}>Explorer
                        Course</Button></Link>
                </div>
            </div>
            <div
                className={"mt-10 max-w-screen-2xl mx-auto bg-[url('/img/mask.png')] bg-center bg-no-repeat bg-cover rounded-3xl h-[400px]"}>
                <div className={"pt-[110px] text-center"}>
                    <h1 className={"text-md"}>
                        PROVIDING AMAZING
                    </h1>
                    <h1 className={"text-4xl mt-3"}>
                        <strong>Education wordpress theme</strong>
                    </h1>
                    <p className={"mt-6"}>
                        The next level of LMS WordPress Theme. Learn anytime and anywhere.
                    </p>
                    <Link href={"/courses"}><Button className={"bg-orange-500 rounded-3xl mt-4"}>Explorer
                        Course</Button></Link>
                </div>
            </div>
            <div className={"mt-10 h-[200px] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex mb-7 bg-[url('/img/banner1.png')] rounded-2xl bg-cover bg-center bg-no-repeat"}>
                <div className={"my-auto flex gap-3"}>
                    <Img src={img1} alt={"image"} className={"bg-cover"}/>
                    <h1 className={"text-2xl max-sm:hidden my-auto"}>Lets Start With Academy LMS</h1>
                </div>
                <div className={"my-auto max-sm:ml-7"}>
                    <Button className={"bg-orange-500 my-auto dark:text-white rounded-full mr-5 max-sm:mb-3 md:mb-4"}>Im A Student</Button>
                    <Button className={"bg-orange-500 my-auto dark:text-white rounded-full"}>Become An Instructor</Button>
                </div>
            </div>
            <div className={"mt-10 mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex mb-7"}>
                <div className={""}>
                    <h1 className={"text-3xl"}>Latest Articles</h1>
                    <p className={"mt-3"}>Explore our Free Arcticles</p>
                </div>
                <div className={"max-sm:hidden mt-auto"}>
                    <Button className={"bg-orange-500 dark:text-white rounded-full"}>All Articles</Button>
                </div>
            </div>
            <div
                className='max-w-screen-2xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-10 max-sm:grid-cols-1'>
                {courses.map(course => (
                    <BlogCard key={course.title} {...course} />
                ))}
            </div>
            <LoginButton>
                <Button className={"bg-orange-500 dark:text-white rounded-full"}>
                    Sign in
                </Button>
            </LoginButton>
        </>
    )
}

export default HomePage