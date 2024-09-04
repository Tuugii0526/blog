import { MetaLogo } from "../svg/MetaLogo"
import { Navigation } from "./Navigation"
import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider"
export default function Header() {
    const menuIsClicked=useMenuIsClicked();
    const handleMenuClick=useMenuHandleClick();
    return <div className="w-full h-[100px] bg-white p-4  flex justify-between items-center ">
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