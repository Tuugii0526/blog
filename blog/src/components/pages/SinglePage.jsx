import { useRouter } from "next/router"
import { useState,useEffect} from "react"
import Header from "../Header/Header";
export const SinglePage=()=>{
//     const menuIsClicked=useMenuIsClicked()
//   const handleMenuClick=useMenuHandleClick();
//   useEffect(()=>{
//  if(menuIsClicked)
// {
// handleMenuClick()
// }
//   },[])
const [blog,setBlog]=useState(null)
const router=useRouter()
const fetchBlog=()=>{
    fetch(`https://dev.to/api/articles/${router.query.id}`).then(response=>response.json()).then(data=>setBlog(data))
}
useEffect(()=>{
    fetchBlog()
},[])
return <>
<div className="w-full z-10 bg-white sticky top-0 ">
<div className=" min-w-[240px] max-w-[1230px] mx-auto ">
<Header/>
</div>
</div>
<div className="w-full z-0">
<div className="page-class">
Single page
</div>
</div>
</>

} 