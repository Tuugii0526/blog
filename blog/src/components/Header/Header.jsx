import { MetaLogo } from "../svg/MetaLogo"
import { HomeLogoContact } from "./HomeLogoContact"

export const Header=()=>{
    return <div className=" min-w-[320px] max-w-[1230px]  mx-auto  ">
        <div className="w-full h-[100px]  p-4 lg:p-0 flex justify-between items-center ">
             <MetaLogo/>
            <HomeLogoContact/>
             <span class="material-symbols-outlined md:hidden">
menu
</span>
        </div>
    </div>
}