import { MetaLogo } from "../svg/MetaLogo"

export const Header=()=>{
    return <div className="min-w-[320px] max-w-[1230px] mx-auto ">
        <div className="w-full p-4 md:p-0 flex justify-between fixed">
             <MetaLogo/>
             <span class="material-symbols-outlined">
menu
</span>
        </div>
    </div>
}