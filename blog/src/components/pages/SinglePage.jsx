import { useRouter } from "next/router"
import { useState,useEffect } from "react"
export const SinglePage=()=>{
const [blog,setBlog]=useState(null)
const router=useRouter()
const fetchBlog=()=>{
    fetch(`https://dev.to/api/articles/${router.query.id}`).then(response=>response.json()).then(data=>setBlog(data))
}
useEffect(()=>{
    fetchBlog()
},[])
return <div>Single page</div>
} 