import { TagsIcon } from "./TagsIcon"
import { useState } from "react"
export const TrendingBlog=({blog})=>{
    const [hover,setHover]=useState(false)
    let className
    if(hover)
    {
         className='h-fit'
    }
    else
    {
        className='h-[35%]'
    }
return <div className={`w-[289px] h-full relative rounded-xl shadow-lg border-solid border-[1px] border-gray-300 overflow-hidden transition duration-500 `} onPointerEnter={()=>{
    setHover(true)
}} onPointerLeave={()=>{
    setHover(false)
}}>
<div className={`absolute inset-x-0 inset-y-0 w-full h-full ${hover ?'scale-110':''}`} style={{
    backgroundImage:`url(${blog?.cover_image})`,
    backgroundPosition:'center',
    backgroundSize:"cover"
}} ></div>

<div className={`w-full h-full relative px-5 ${hover ? 'bg-slate-900 opacity-90':''}`}>
<div className={`${className} w-full  absolute bottom-5 flex flex-col gap-2`}>
<div className="max-w-[90%] h-fit flex flex-wrap">
<TagsIcon blog={blog}/>
</div>
<div className="w-[90%] overflow-hidden text-sm md:text-lg font-semibold text-white ">{blog?.description} 
    {!hover && <div className="absolute flex gap-1 bottom-2 right-8 scale-[2] "> 
        <div className="w-[2px] h-[2px] animate-pulse rounded-full  bg-gradient-to-r from-violet-600 to-pink-600"></div> 
        <div className="w-[2px] h-[2px] rounded-full animate-pulse  bg-gradient-to-b from-cyan-500 to-blue-800"></div> 
        <div className="w-[2px] h-[2px] rounded-full animate-pulse  bg-gradient-to-r from-violet-600 to-pink-600"></div> 
    </div>}
</div>
</div>
</div>
</div>
} 