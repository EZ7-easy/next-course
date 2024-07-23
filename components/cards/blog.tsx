import {VscCircleLarge} from "react-icons/vsc";
import Image from 'next/image'
import Link from 'next/link'
import { ICourse } from '@/types'
import {getCourses} from "@/service/blog.service";


interface Props extends ICourse {
    isVertical?: boolean
}

async function BlogCard(course: Props) {


    return (
        <div className={'mx-auto'}>
            <div className={'w-[360px] h-[530px]'}>
                <div
                    className="group relative cursor-pointer items-center justify-center overflow-hidden">
                    <div>
                        <Image
                            width={360}
                            height={530}
                            className="h-[530px] w-full object-cover"
                            src={course.image.url}
                            alt="image"/>
                    </div>
                    <div
                        className="absolute inset-0  from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div
                        className="bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-white/70 group-hover:via-white/60 group-hover:to-white/70 h-[80px] absolute mt-[470px] inset-0 flex translate-y-[35%] flex-col  justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <button
                            className="w-[100px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-com text-sm capitalize">
                            <Link href={`/courses/${course.slug}`}>
                                <div>Sotib olish</div>
                            </Link>
                        </button>
                        <div
                            className="mb-6 ml-3 flex gap-10 text-lg italic opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <button>XL</button>
                            <button>L</button>
                            <button>M</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'mx-3 my-2'}>
                <div className={'text-md'}>
                    <Link href={`/courses/${course.slug}`}>
                        {course.title}
                    </Link>
                </div>
                <div className={'flex gap-2 mt-2'}>
                    <VscCircleLarge className={'bg-gray-600 rounded-full p-[12px]'}/>
                    <VscCircleLarge className={'bg-blue-700 rounded-full p-[12px]'}/>
                    <VscCircleLarge className={'bg-black rounded-full p-[12px]'}/>
                </div>
                <div className={'mt-2'}><Link href={`/courses/${course.slug}`}>Narx: {course.cost} UZS</Link></div>
                {/*<Link href={`/categories/${product.categories.slug}`}>*/}
                {/*    <Badge variant={'outline'} role='button'>*/}
                {/*        /!*{product.categories.name}*!/*/}
                {/*    </Badge>*/}
                {/*</Link>*/}
            </div>
        </div>
    )
}

export default BlogCard