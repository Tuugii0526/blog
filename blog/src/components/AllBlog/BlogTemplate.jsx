import { TagsIcon } from "../Hero/TagsIcon"
import { dateFormatter } from "../Util/dateFormatter"
import { newImage } from "../Util/newBlog"
import { ViewInDetail } from "./ViewInDetail"
import {useState} from 'react'
export const BlogTemplate=({blog,isAllBlog})=>{
    const [generatedImage,setGeneratedImage]=useState(newImage())
return <div >
    <img src={`${blog?.cover_image || generatedImage}`} alt='blog image' className={`w-full h-full rounded-sm`} />

 <div >
 <div >
 <TagsIcon blog={blog} special={false}/>
<ViewInDetail description={blog?.description}/>
 </div>

<div className="flex justify-around">
{!isAllBlog && <>
<div className="h-full w-9 rounded-[50%]">
    <img src={`${blog?.user?.profile_image || generatedImage}`} alt="img" width={'100%'} height={'100%'}/>
</div>
<p className="font-medium text-[#97989F]">{blog?.user.name}</p>
</> }
<p className='text-[#97989F] text-xs leading-6 font-normal min-[480px]:text-sm'>{dateFormatter(blog)}</p>
</div>
 </div>


</div>
}