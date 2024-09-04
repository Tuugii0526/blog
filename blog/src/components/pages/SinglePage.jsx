import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
export const SinglePage=()=>{
const [blog,setBlog]=useState(null)
const router=useRouter()
const fetchBlog=()=>{
    fetch(`https://dev.to/api/articles/${router.query.id}`).then(response=>response.json()).then(data=>setBlog(data))
}
useEffect(()=>{
    fetchBlog()
},[])
return <div className="relative flex flex-col gap-[100px]">

<div className="w-full z-10 bg-white sticky top-0 ">
<div className=" min-w-[320px] max-w-[1230px] mx-auto ">
<Header/>
</div>
</div>



<div className="w-full  bg-[#F6F6F7] fixed bottom-0">
  <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
   <Footer/>
  </div>
</div>

</div>
} 