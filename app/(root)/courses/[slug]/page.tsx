import { FaStar } from "react-icons/fa";
import { Check } from 'lucide-react';
import {Button} from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
// import Counter from "@/app/(root)/_components/Counter";
import {getDetailedCourse} from "@/service/blog.service";

async function SlugPage({ params }: { params: { slug: string } }) {
    const course = await getDetailedCourse(params.slug)

    return (
        <div>
            <div  className={'text-center flex gap-2 mx-auto w-[515px] mt-5'}>
                <Link href={'/'}>
                    <h1 className={'text-[rgb(189,190,191)] hover:text-black'}>Asosiy</h1>
                </Link>
                <p className={'text-[rgb(189,190,191)]'}>-</p>
                <Link href={'/catalog'}>
                    <h1 className={'text-[rgb(189,190,191)] hover:text-black'}>Kiyim katalogi</h1>
                </Link>
                {/*<p className={'text-[rgb(189,190,191)]'}>-</p>*/}
                {/*<Link href={'/catalog/tashqi-kiyim'}>*/}
                {/*    <h1 className={'text-[rgb(189,190,191)] hover:text-black'}>Tashqi kiyim</h1>*/}
                {/*</Link>*/}
                <p className={'text-[rgb(189,190,191)]'}>-</p>
                <div>
                    <h1>Vetrovka</h1>
                </div>
                <p className={'text-[rgb(189,190,191)]'}>-</p>
                <div>
                    {course.title}
                </div>
            </div>
            <h1 className={'text-4xl text-center my-6'}><strong>{course.title}</strong></h1>
            <div className={'flex mx-auto w-[1000px] gap-8 mb-[50px]'}>
                <div className={'w-[600px] h-[900px]'}>
                    <img src={course.image.url} alt={'image'}/>
                </div>
                <div className={''}>
                    <h1 className={'text-sm'}>Artikul: SS24CR1-27-19816</h1>
                    <div className={'flex my-5'}>
                        <FaStar className={'text-lg text-yellow-400'}/>
                        <FaStar className={'text-lg text-yellow-400'}/>
                        <FaStar className={'text-lg text-yellow-400'}/>
                        <FaStar className={'text-lg text-yellow-400'}/>
                        <FaStar className={'text-lg text-yellow-400'}/>
                    </div>
                    <h1 className={'text-3xl'}>
                        <span className={'text-sm'}>Narx:</span> <br/>
                        <strong>{course.cost} UZS</strong>
                    </h1>
                    <div>
                        <h1 className={'text-sm mt-[50px]'}>Hajmi</h1>
                        <button className={'mt-2 rounded-2xl text-sm bg-[rgb(232,232,232)] py-1 px-4'}>M</button>
                    </div>
                    <div>
                        <h1 className={'text-sm mt-4'}>Rang</h1>
                        <Check className={'mt-2 rounded-2xl text-sm text-black bg-[rgb(232,232,232)] p-1'}/>
                    </div>
                    <div className={'flex gap-7 my-7'}>
                        {/*<Counter/>*/}
                        <Button className={'gap-2 rounded-3xl p-6 bg-[rgb(56,59,71)]'}><LuShoppingCart/>Sotib
                            Olish</Button>
                    </div>
                    <div>Ветровка короткая длина</div>
                    <div className={'flex gap-[150px] mt-5'}>
                        <div>
                            <h1 className={'text-sm'}>Uslub</h1>
                            <h1>CORE</h1>
                        </div>
                        <div>
                            <h1 className={'text-sm'}>Materiallar</h1>
                            <h1>полиэстер</h1>
                        </div>
                    </div>
                    <div className={'mt-3'}>
                        <h1 className={'text-sm'}>Tarkibi</h1>
                        <h1>100% polyester</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlugPage
