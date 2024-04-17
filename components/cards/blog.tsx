import { ICourse } from '@/types'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props extends ICourse {
    isVertical?: boolean
}

function BlogCard(course: Props) {
    return (
        <div className={"w-[370px] border rounded-3xl mx-auto"}>
            <Link
                href={'/'}
                className={"mx-auto"}
            >
                <div className=''>
                    <Image
                        width={450}
                        height={450}
                        src={course.image.url}
                        alt={course.title}
                        className='rounded-md  object-cover'
                    />
                </div>
                <div className='space-y-4 mx-auto'>
                    <div className='flex items-center gap-4 ml-7 mt-2'>
                        <div className='flex items-center gap-2'>
                            <Image
                                src={course.author.image.url}
                                alt='author'
                                width={30}
                                height={30}
                                className='object-cover rounded-sm'
                            />
                            <p>by {course.author.name}</p>
                        </div>
                    </div>
                    {/* Title */}
                    <h2 className='text-xl font-creteRound group-hover:text-blue-500 transition-colors ml-7'>
                        {course.title}
                    </h2>
                    {/* Time info */}
                    <div className='flex items-center gap-4 ml-7'>
                        <div className='flex items-center gap-2'>
                            <CalendarDays className='w-5 h-5'/>
                            <p>5 dec</p>
                        </div>
                        <Minus/>
                        <div className='flex items-center gap-2'>
                            <Clock className='w-5 h-5'/>
                            <p>01 min read</p>
                        </div>
                    </div>
                    <hr className={"w-[350px] mx-auto"}/>
                    <div className={"mx-auto ml-7 flex"}>
                        <p className={"text-xl text-green-500 mb-4"}>
                            ${course.cost}
                        </p>
                        <Link href={"/blog"} className={"text-grey ml-[190px]"}>View more</Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard