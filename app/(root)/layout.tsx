import {ChildProps} from "@/types";
import Navbar from "@/app/(root)/_components/navbar";
import Footer from "@/app/(root)/_components/footer";

function Layout({children}: ChildProps) {
    return (
        <main>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </main>)
}

export default Layout