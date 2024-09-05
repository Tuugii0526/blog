import {useState,createContext,useContext,useEffect} from 'react'
import { fetchBlogs } from '../Util/fetchBlogs'
import { selectTags } from '../Util/selectTags'
import { TagSelection } from './TagSelection'
import { BlogTemplate } from './blogTemplate'
const SetTagContext=createContext(null)
export const useSetTagContext=()=>{
    return useContext(SetTagContext)
}
export const AllBlog=({isAllBlog=true})=>{
    let selectionTags=[]
    const [blogs,setBlogs]=useState([])
    const [tag,setTag]=useState()
   useEffect(()=>{
    fetchBlogs(setBlogs,'',0,1000)
   },[])
   if(blogs.length)
   {
       selectionTags =selectTags(blogs)
   }
    return <div className="w-full h-[1701px] flex flex-col gap-20 ">
        <div className="w-full h-[85px] flex flex-col justify-between">
    <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold">All Blog Post</p>
        {isAllBlog &&
        <SetTagContext.Provider value={setTag}>
          <TagSelection selectionTags={selectionTags}/>
        </SetTagContext.Provider>}
        </div>
        <div className='w-full h-[1584px] flex flex-wrap overflow-hidden'>
            {blogs.slice(0,9).map(blog=><BlogTemplate blog={blog} isAllBlog={isAllBlog}/>)}
        </div>
          
    </div>
}