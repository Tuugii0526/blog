import { AllBlog } from "../AllBlog/AllBlog";
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
    return <div className="w-full z-0">

    <div className=" min-w-[320px] max-w-[1230px]  flex flex-col gap-[100px] mx-auto ">
      <AllBlog key={1} isAllBlog={false} threeOrNine={9}/>
    </div>

    </div>
    
    
    
    
}