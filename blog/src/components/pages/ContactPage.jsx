import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider";
import { useEffect } from "react";
export const ContactPage=()=>{
    const menuIsClicked=useMenuIsClicked()
  const handleMenuClick=useMenuHandleClick();
  useEffect(()=>{
    console.log('initial menuIsClicked',menuIsClicked)
 if(menuIsClicked)
{
handleMenuClick()
}
  },[])
    return  <div>Iam contact page</div>
}