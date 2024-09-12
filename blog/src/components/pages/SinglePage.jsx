import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider";
export const SinglePage=()=>{
    const menuIsClicked=useMenuIsClicked()
  const handleMenuClick=useMenuHandleClick();
  useEffect(()=>{
 if(menuIsClicked)
{
handleMenuClick()
}
  },[])
const [blog,setBlog]=useState(null)
const router=useRouter()
const fetchBlog=()=>{
    fetch(`https://dev.to/api/articles/${router.query.id}`).then(response=>response.json()).then(data=>setBlog(data))
}
useEffect(()=>{
    fetchBlog()
},[])
return <div className="w-full z-0">
<div className=" min-w-[320px] max-w-[1230px]  flex flex-col gap-[100px] mx-auto ">
Single page
</div>
</div>
} 