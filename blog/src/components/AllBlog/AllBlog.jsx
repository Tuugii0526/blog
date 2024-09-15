import {useState} from 'react'
import { useInitialAllBlogsContext } from '../ContextStateProvider'
import { AllBlogSub } from './AllBlogSub'
export const AllBlog=({isAllBlog=true})=>{
    const [blogs,setBlogs]=useState(useInitialAllBlogsContext({categoryName:'allblog',whichOne:'blogs'}))
    const [allTags,setAllTags]=useState(useInitialAllBlogsContext({categoryName:'allblog',whichOne:'all_tags'}))
return <div className="w-full h-fit flex flex-col gap-5 ">
    <AllBlogSub blogs={blogs} allTags={allTags} isAllBlog={isAllBlog}/>
</div>
}