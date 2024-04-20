import {Button} from "@/components/ui/button";
import React from "react";
import { Palette, CodeXml, Newspaper, SquarePlay, Camera, BadgeDollarSign, PencilLine, Landmark, Atom, Network } from 'lucide-react';

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
            <div
                className={"mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex xl:flex md:grid md:grid-cols-3 md:gap-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5 "}>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <Palette className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Art & Design</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <CodeXml className={"mx-auto w-[150px] h-[40px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Development</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <Newspaper className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Communication</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <SquarePlay className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Videography</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <Camera className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Photography</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
            </div>
            <div
                className={"mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex xl:flex md:grid md:grid-cols-3 md:gap-6 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5  mb-7"}>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <BadgeDollarSign className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Marketing</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <PencilLine className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Content Writing</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <Landmark className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Finance</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <Atom className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Science</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
                <div className={"text-center w-[170px] h-[170px] space-y-3 border rounded-xl"}>
                    <Network className={"mx-auto w-[150px] h-[38px] text-orange-500 mt-6"}/>
                    <h1 className={"text-lg"}>Network</h1>
                    <p className={"text-center text-sm"}>38 courses</p>
                </div>
            </div>
        </div>
    )
}

export default Category