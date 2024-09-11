import { MetaLogo } from "../svg/MetaLogo"
import { Navigation } from "./Navigation"
import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider"
import { useEffect ,useState} from "react";
export default function Header() {
    const [menuIsClicked,setMenuIsClicked]=useState(useMenuIsClicked())
    const handleMenuClick=useMenuHandleClick();

    useEffect(()=>{
        if(!menuIsClicked)
            {
             handleMenuClick()
             setMenuIsClicked(!menuIsClicked)
            }
    },[])
    return <div className="w-full h-[100px] border-b-solid border-b-[0.1px] border-b-slate-400 p-4  flex justify-between items-center ">
             <MetaLogo/>
             <Navigation/>
             <div className="md:hidden " onClick={()=>{
                handleMenuClick()
                setMenuIsClicked(!menuIsClicked)
             }}>
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