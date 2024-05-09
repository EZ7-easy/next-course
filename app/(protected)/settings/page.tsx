'use client'

import {Button} from "@/components/ui/button";
import { signOut } from "next-auth/react";
import {useCurrentUser} from "@/hooks/use-current-user";

const SettingsPage =  () => {
    const user = useCurrentUser()

    const onClick = () => {
        signOut()
    }

    return (
        <div>
            <form>
                <Button type={'submit'} onClick={onClick}>
                    Sign out
                </Button>
            </form>
        </div>
    )
}

export default SettingsPage