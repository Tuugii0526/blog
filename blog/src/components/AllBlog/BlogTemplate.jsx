import { TagsIcon } from "../Hero/TagsIcon"
import { dateFormatter } from "../Util/dateFormatter"
import { newImage } from "../Util/newBlog"
export const BlogTemplate=({blog,isAllBlog})=>{
return <div className="w-[392px] h-[476px] rounded-xl border p-4 flex flex-col gap-4">
 <div className="w-full h-[240px]">
    <img src={`${blog?.cover_image || newImage}`} alt='blog image' className="w-full h-full" />
 </div>


 <div className="w-full h-[188px] flex flex-col p-2 justify-between">
 <div className="w-full h-[128px] flex flex-col justify-between">
 <TagsIcon blog={blog} special={false}/>
 <div className="w-full h-[84px] ">{blog?.description} {'howkjsdlfa'}</div>
 </div>

<div className="w-full h-[36px] flex items-center gap-5">
{!isAllBlog && <>
<div className="h-full w-9 rounded-full ">
    <img src={`${blog?.user?.profile_image || newImage}`} alt="profile image" width={'100%'} height={'100%'}/>
</div>
<p className="font-medium text-[#97989F]">{blog?.user.name}</p>
</> }
<p className='text-[#97989F]  leading-6 font-normal'>{dateFormatter(blog)}</p>
</div>
 </div>


</div>
}