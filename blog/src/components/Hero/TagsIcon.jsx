import { newBlog } from "../Util/newBlog"
const getCanBeFittedTags=(tagsArray)=>{
    if(tagsArray.length)
    {
        const canBeFittedTags=[]
    let counter=0
    let stringsSum=tagsArray[counter]?.length
      while(stringsSum<=40 && counter <tagsArray.length)
      {
         canBeFittedTags.push(tagsArray[counter])
         stringsSum+=tagsArray[counter]?.length
         counter++
      }
      return canBeFittedTags
    }
    return []
}
export const toUppercaseTags=(tagsArray)=>{
    const titles=tagsArray.map(title=>title.split(''))
    if(titles)
    titles.forEach(title=>{title[0]=title[0].toUpperCase()})
    return  titles.map(title=>title.join(''))
}
export const TagsIcon=({blog,special=true})=>{
    let fixedTitles;
    if(blog?.tag_list?.length)
    {

         fixedTitles=toUppercaseTags( getCanBeFittedTags(blog?.tag_list))
    }
    else
    {
        fixedTitles=toUppercaseTags(newBlog?.tag_list)
    }
    let className;
    if(special)
    {
        className='h-fit w-fit px-1 py-0.5 rounded-md max-[576px]:text-xs  min-[576px]:text-sm text-white bg-[#4B6BFB] '
    }
    else
    {
        className='h-fit w-fit px-1 py-0.5 rounded-md  max-[576px]:text-xs  min-[576px]:text-sm bg-[#4B6BFB0D] text-[#4B6BFB]'
    }
return <div className="w-full h-fit flex flex-wrap gap-1">
{fixedTitles?.map(title=>
    <div className={className} key={title}>{title}</div>
)}
</div>
} 