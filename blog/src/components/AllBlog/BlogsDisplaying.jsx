import { useMemo,useEffect,useState} from 'react'
import { useTagContext } from './AllBlogSub'
import { takeBlogsByTag } from '../Util/takeBlogsByTag'
import { BlogsDisplayingUnList } from './BlogsDisplayingUnList'
export const BlogsDisplaying=({blogs,isAllBlog})=>{
    const tag=useTagContext()
    const tagSearchedBlogs=useMemo(()=>{
        return takeBlogsByTag(blogs,tag)
    },[tag])
    return<BlogsDisplayingUnList key={tag}        tagSearchedBlogs={tagSearchedBlogs} isAllBlog={isAllBlog} />
}
{/* <div className="w-full  bg-[#F6F6F7] sticky bottom-0">
  <div className=" min-w-[240px] max-w-[1230px]  mx-auto relative">
   <Footer/>
  </div>
</div> */}