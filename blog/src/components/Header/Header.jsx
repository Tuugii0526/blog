import { MetaLogo } from "../svg/MetaLogo"
import { HomeLogoContact } from "./HomeLogoContact"
import { Navigation } from "./Navigation"

export const Header=()=>{
    return <div className="w-full h-[100px]  p-4 lg:p-0 flex justify-between items-center">
             <MetaLogo/>
             <Navigation/>
             <div className="md:hidden">
             <span class="material-symbols-outlined ">
menu
</span>
             </div>
        </div>
}