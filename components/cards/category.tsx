import {Button} from "@/components/ui/button";
import React from "react";
import cate1 from '@/public/img/cate1.png'
import cate2 from '@/public/img/cate2.png'
import cate3 from '@/public/img/cate3.png'
import cate4 from '@/public/img/cate4.png'
import cate5 from '@/public/img/cate5.png'
import Image from "next/image";

const Category = () => {
    return (
        <div>
            <div className={"mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex mb-7"}>
                <div className={""}>
                    <h1 className={"text-3xl"}>Top Categories</h1>
                    <p className={"mt-3"}>Explore our Popular Categories</p>
                </div>
                <div className={"max-sm:hidden mt-auto"}>
                    <Button className={"bg-orange-500 dark:text-white rounded-full"}>All Categories</Button>
                </div>
            </div>
            <div className={"mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex xl:flex md:grid md:grid-cols-3 md:gap-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 "}>
                <Image src={cate1} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate2} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate3} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate4} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate5} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
            </div>
            <div className={"mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex xl:flex md:grid md:grid-cols-3 md:gap-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5  mb-7"}>
                <Image src={cate1} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate2} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate3} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate4} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
                <Image src={cate5} alt={"log"} className={"w-[160px] mx-auto bg-white rounded-sm"}/>
            </div>
        </div>
    )
}

export default Category