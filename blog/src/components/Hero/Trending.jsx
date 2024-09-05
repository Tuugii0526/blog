import { fetchBlogs } from "../Util/fetchBlogs"
import {useState,useEffect} from 'react'
import { TrendingBlog } from "./TrendingBlog";
import Link from "next/link";
export const Trending=()=>{
    const [blogs,setBlogs]=useState([])
    const [sliceStart,setSliceStart]=useState(0)
    const slicedBlogs=blogs.slice(sliceStart,sliceStart+4)
    useEffect(()=>{
        setTimeout(()=>{
            setSliceStart((sliceStart+1)%25)
        },10000)
    },[sliceStart])
    useEffect(()=>{
        fetchBlogs(setBlogs,"",20)
    },[])
    return <div className="w-full h-[390px] flex flex-col gap-[10px]">
   <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold text-[#181A2A]">Trending</p>
   <div className="w-full h-[320px] flex justify-around flex-wrap  gap-5 overflow-hidden">
    {
        slicedBlogs.map(blog=><Link className="block" href={`/Blog/${blog?.id}`}>
        <TrendingBlog key={blog?.id} blog={blog}/>
            </Link>
        )
    }
   </div>
    </div>
}


