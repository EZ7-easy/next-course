import { ICourse } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { DrawerClose } from '../ui/drawer'

function SearchCard(course: ICourse) {
    return (
        <Link href={`/courses/${course.slug}`}>
            <DrawerClose className='flex flex-col space-y-2 text-start'>
                <Image
                    width={200}
                    height={200}
                    src={course.image.url}
                    alt={course.title}
                    className='rounded-md shadow-xl dark:shadow-white/10'
                />
                <div className='flex items-center gap-2'>
                    <div className='text-black'>
                    {course.date}
                    </div>
                </div>
                <h1 className='font-creteRound text-black'>{course.title}</h1>
            </DrawerClose>
        </Link>
    )
}

export default SearchCard
