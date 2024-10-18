import { useState,useEffect,useContext,createContext } from "react"
import { BlogsDisplaying } from "./BlogsDisplaying"
import { TagsDisplaying } from "./TagsDisplaying"
const TagContext=createContext(null)
const SetTagContext=createContext(null)
export const useSetTagContext=()=>{
    return useContext(SetTagContext)
}
export const useTagContext=()=>{
    return useContext(TagContext)
}
export const AllBlogSub=({blogs,allTags,isAllBlog})=>{
    const [tag,setTag]=useState(localStorage.getItem('tag') || "all")
    localStorage.setItem("tag",tag)
    const includedTags=JSON.parse(localStorage.getItem("includedTags"))
    let tagsLocalTagsIncluded;
    if(includedTags)
    { 
       tagsLocalTagsIncluded=allTags.map(tag=>{
       let includedTag
       for(let i=0;i<includedTags.length;i++)
    {  
        if(includedTags[i]?.title===tag?.title)
                {
                  includedTag={...tag,included:includedTags[i]["included"]}
                }
    }
       if(includedTag)
       {
        return includedTag
       }
      else 
      {
        return tag
      }
       })
    }
    
return <SetTagContext.Provider value={setTag}>
<TagContext.Provider value={tag}>

        <TagsDisplaying allTags={tagsLocalTagsIncluded || allTags} isAllBlog={isAllBlog}/>
        <BlogsDisplaying blogs={blogs} isAllBlog={isAllBlog}/>

</TagContext.Provider>
</SetTagContext.Provider >
}
