import { newBlog } from "../Util/newBlog"
export const toUppercaseTags=(tagsArray)=>{
    const titles=tagsArray.map(title=>title.split(''))
    titles.forEach(title=>{title[0]=title[0].toUpperCase()})
    return  titles.map(title=>title.join(''))
}
export const TagsIcon=({blog,special=true})=>{
    let fixedTitles;
    if(blog?.tag_list.length)
    {

         fixedTitles=toUppercaseTags(blog.tag_list)
    }
    else
    {
        fixedTitles=toUppercaseTags(newBlog?.tag_list)
    }
    let className;
    if(special)
    {
        className='h-fit w-fit px-3 py-0.5 shadow-lg bg-[#4B6BFB] rounded-md  flex justify-center items-center text-white max-[597px]:text-[8px]  min-[598px]:text-sm'
    }
    else
    {
        className='h-7 w-fit px-2 bg-[#4B6BFB0D] rounded-md flex justify-center items-center text-[#4B6BFB] text-sm md:text-lg'
    }
return <div className="w h-fit flex flex-wrap gap-2">
{fixedTitles.map(title=>
    <div className={className} key={title}>{title}</div>
)}
</div>
} 