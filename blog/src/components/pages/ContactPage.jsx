import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider";
import { useEffect } from "react";
export const ContactPage=()=>{
    const menuIsClicked=useMenuIsClicked()
  const handleMenuClick=useMenuHandleClick();
  useEffect(()=>{
 if(menuIsClicked)
{
handleMenuClick()
}
  },[])
    return <div className="w-full z-0">
    <div className=" min-w-[320px] max-w-[1230px]  flex flex-col gap-[100px] mx-auto ">
    Contact page
  </div>
    </div>
}