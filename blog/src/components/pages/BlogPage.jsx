import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider";
import { useEffect } from "react";
export default function  BlogPage(){
    const menuIsClicked=useMenuIsClicked()
  const handleMenuClick=useMenuHandleClick();
  useEffect(()=>{
 if(menuIsClicked)
{
handleMenuClick()
}
  },[])
    return  <div>Iam blog page</div>
    
    
}