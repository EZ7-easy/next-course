import React from "react";
import {getCourses} from "@/service/blog.service";
import BlogCard from "@/components/cards/blog";

async function Courses() {
    const courses = await getCourses()
    return (
        <div>
            <div
                className='mt-[150px] max-w-screen-2xl mx-auto grid xl:grid-cols-2 xl:mx-[400px] md:grid-cols-2 lg:grid-cols-2 gap-10 max-sm:grid-cols-1'>
                {courses.map(course => (
                    <BlogCard key={course.title} {...course} />
                ))}
            </div>
        </div>
    )
}

export default Courses