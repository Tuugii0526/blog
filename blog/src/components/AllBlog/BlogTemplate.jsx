import { TagsIcon } from "../Hero/TagsIcon"
import { dateFormatter } from "../Util/dateFormatter"
import { newImage } from "../Util/newBlog"
import {useState} from 'react'
export const BlogTemplate=({blog,isAllBlog})=>{
    const [hover,setHover]=useState(false)
    let className=''
    if(hover)
    {
     className="scale-125 duration-150"
    }
return <div className="w-[300px] min-[420px]:w-[392px] h-[476px] rounded-xl border shadow-2xl p-4 flex flex-col gap-4 line-clamp-3"
onPointerEnter={()=>{
    setHover(true)
}}
onPointerLeave={()=>{
    setHover(false)
}}>
 <div className="w-full h-[240px] rounded-sm overflow-hidden ">
    <img src={`${blog?.cover_image || newImage()}`} alt='blog image' className={`w-full h-full ${className}`} />
 </div>


 <div className={`w-full h-[188px] flex flex-col p-2 justify-between relative rounded-sm ${hover && 'bg-slate-200np'}`}>
 <div className="w-full h-[128px] flex flex-col justify-between">
 {
    !hover && <TagsIcon blog={blog} special={false}/>
 }
 <div className={`w-full ${hover ? 'absolute top-0 h-fit' : 'h-[84px] overflow-hidden'}`}>{blog?.description}</div>
 </div>

<div className="w-full h-[36px] flex items-center gap-5">
{!isAllBlog && <>
<div className="h-full w-9 rounded-[50%]">
    <img src={`${blog?.user?.profile_image || newImage()}`} alt="profile image" width={'100%'} height={'100%'}/>
</div>
<p className="font-medium text-[#97989F]">{blog?.user.name}</p>
</> }
<p className='text-[#97989F]  leading-6 font-normal'>{dateFormatter(blog)}</p>
</div>
 </div>


</div>
}