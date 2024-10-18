import {useState,useEffect} from 'react'
import { useInitialAllBlogsContext } from '../ContextStateProvider';
import { TrendingBlog } from "./TrendingBlog";
export const Trending=()=>{
    const [blogs,setBlogs]=useState(useInitialAllBlogsContext({categoryName:'trending',whichOne:'blogs'}))
    return <div className="w-full  h-[390px] flex flex-col gap-[10px]">

   <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold text-[#181A2A]">Trending</p>
   <div className=" flex w-full h-full overflow-x-scroll relative snap-x">
   {
       blogs.slice(0,20).map(blog=><TrendingBlog key={blog?.id} blog={blog}/>
       )
   }
  </div>
    </div>
}