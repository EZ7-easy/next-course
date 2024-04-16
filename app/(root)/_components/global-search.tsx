import React from 'react'
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {Search} from "lucide-react";

function GlobalSearch() {
    return (
        <Drawer>
            <DrawerTrigger>
                {''}
                <div
                    className={"gap-1 hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors flex items-center"}>
                    <Search/>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>

    )
}

export default GlobalSearch