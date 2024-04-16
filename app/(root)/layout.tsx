import {ChildProps} from "@/types";
import Navbar from "@/app/(root)/_components/navbar";
import Footer from "@/app/(root)/_components/footer";
import Category from "@/app/(root)/(home)/category";

function Layout({children}: ChildProps) {
    return (
        <main>
            <Navbar/>
            <div>{children}</div>
            <Category/>
            <Footer/>
        </main>)
}

export default Layout