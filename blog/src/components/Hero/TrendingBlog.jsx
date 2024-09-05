import { TagsIcon } from "./TagsIcon"
export const TrendingBlog=({blog})=>{
return <div className="w-[289px] h-full relative rounded-xl px-5 shadow-lg border-solid border-[1px] border-gray-300" style={{
    backgroundImage:`url(${blog.cover_image})`,
    backgroundPosition:'center',
    backgroundSize:"cover"
}}>
<div className="h-[30%] w-full  absolute bottom-5 flex flex-col justify-between hover:h-fit">
<div className="max-w-[95%] h-fit flex flex-wrap">
<TagsIcon blog={blog}/>
</div>
<div className="w-full h-[76px] overflow-hidden text-sm md:text-lg font-semibold text-white">{blog.description} </div>
</div>
</div>
} 