import {useState,useEffect} from 'react'
import { useInitialAllBlogsContext } from '../ContextStateProvider';
import { TrendingBlog } from "./TrendingBlog";
import Link from "next/link";
export const Trending=()=>{
    const [blogs,setBlogs]=useState(useInitialAllBlogsContext({categoryName:'trending',whichOne:'blogs'}))
    // const [sliceStart,setSliceStart]=useState(0)
    // const slicedBlogs=blogs.slice(sliceStart,sliceStart+4)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setSliceStart((sliceStart+1)%25)
    //     },10000)
    // },[sliceStart])
    return <div className="w-full  h-[390px] flex flex-col gap-[10px]">

   <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold text-[#181A2A]">Trending</p>
   <div className='overflow-hidden w-full h-full '>
   <div className=" flex  h-full relative">
   {
    //    blogs.map(blog=><Link  key={blog?.id} href={`/Blog/${blog?.id}`} >
    //    <TrendingBlog blog={blog}/>
    //        </Link>
    //    )

    blogs.slice(0,10).map(blog=><TrendingBlog blog={blog}/>
       )

    // blogs.map(blog=>(
    //    <>
    //     <img src={blog?.cover_image} className='w-1/2 rounded-sm' alt="" />

    //    <Link href={`/Blog/${blog?.id}`}>
    //    <div className='inset-x-0 inset-y-0  absolute h-full w-full text-white'>hi</div>
    //    </Link>
    //    </>
    // ))
   }
  </div>
   </div>
    </div>
}


