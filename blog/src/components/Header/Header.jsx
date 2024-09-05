import { MetaLogo } from "../svg/MetaLogo"
import { Navigation } from "./Navigation"
import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider"
export default function Header() {
    const menuIsClicked=useMenuIsClicked();
    const handleMenuClick=useMenuHandleClick();
    return <div className="w-full h-[100px] border-b-solid border-b-[0.1px] border-b-slate-400 p-4  flex justify-between items-center ">
             <MetaLogo/>
             <Navigation/>
             <div className="md:hidden " onClick={handleMenuClick}>
             {
                menuIsClicked ? 
                <span class="material-symbols-outlined">
close
</span>
                :
                <span className="material-symbols-outlined ">
                    menu
                    </span>
             }
             </div>
        </div>
}