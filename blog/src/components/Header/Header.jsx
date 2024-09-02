import { useContext } from "react"
import { MetaLogo } from "../svg/MetaLogo"
import { Navigation } from "./Navigation"
export default function Header() {
    return <div className="w-full h-[100px] bg-white p-4  flex justify-between items-center sticky top-0 ">
             <MetaLogo/>
             <Navigation/>
             <div className="md:hidden " >
             {/* {
                isClicked ? 
                <span class="material-symbols-outlined">
close
</span>
                : */}
                <span className="material-symbols-outlined ">
                    menu
                    </span>
             {/* } */}
             </div>
        </div>
}