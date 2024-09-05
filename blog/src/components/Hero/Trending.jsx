import { fetchBlogs } from "../Util/fetchBlogs"
import {useState,useEffect} from 'react'
import { TrendingBlog } from "./TrendingBlog";
export const Trending=()=>{
    const [blogs,setBlogs]=useState([])
    const slicedBlogs=blogs.slice(0,4)
    
    useEffect(()=>{
        fetchBlogs(setBlogs,"",20)
    },[])
    return <div className="w-full h-[390px] flex flex-col gap-[10px]">
   <span className="relative left-2 md:text-center text-xl md:text-2xl font-bold text-[#181A2A]">Trending</span>
   <div className="w-full h-[320px] flex justify-around flex-wrap  gap-5 overflow-hidden">
    {
        slicedBlogs.map(blog=><TrendingBlog blog={blog}/>)
    }
   </div>
    </div>
}