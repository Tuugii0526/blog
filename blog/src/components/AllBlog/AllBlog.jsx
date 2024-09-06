import {useState,createContext,useContext,useEffect} from 'react'
import { fetchBlogs } from '../Util/fetchBlogs'
import { selectTags } from '../Util/selectTags'
import { TagSelection } from './TagSelection'
import { BlogTemplate } from './blogTemplate'
import { takeBlogsByTag } from '../Util/takeBlogsByTag'
const TagContext=createContext(null)
const SetTagContext=createContext(null)
export const useSetTagContext=()=>{
    return useContext(SetTagContext)
}
export const useTagContext=()=>{
    return useContext(TagContext)
}
export const AllBlog=({isAllBlog=true})=>{
    let selectionTags=[]
    const [blogs,setBlogs]=useState([])
    const [tagSearchedBlogs,setTagSearchedBlogs]=useState([])
    const [indexForThirtyPages,setIndexForThirty]=useState(0)
    const [indexForThreePages,setIndexForThreePages]=useState(0)
    const [tag,setTag]=useState('all')
   useEffect(()=>{
    fetchBlogs(setBlogs,'',0,1000)
   },[])
   useEffect(()=>{
       setTagSearchedBlogs(takeBlogsByTag(blogs,tag))
},[tag])
   if(blogs.length)
   {
       selectionTags =selectTags(blogs)
   }
   console.log('tagSearched blogs',tagSearchedBlogs)
    return <div className="w-full h-[1701px] flex flex-col gap-20 ">
        <div className="w-full h-[85px] flex flex-col justify-between">
    <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold">All Blog Post</p>
        {isAllBlog &&
        <SetTagContext.Provider value={setTag}>
            <TagContext.Provider value={tag}>
                <TagSelection selectionTags={selectionTags}/>
            </TagContext.Provider>
        </SetTagContext.Provider>}
        </div>
        <div className='w-full h-[1584px] flex flex-wrap overflow-hidden'>
            
            {(!blogs.length)?blogs.slice(50,55).map(blog=><BlogTemplate key={blog?.id} blog={blog} isAllBlog={isAllBlog}/>)
            :tagSearchedBlogs.slice(50,55).map(blog=><BlogTemplate key={blog?.id} blog={blog} isAllBlog={isAllBlog}/>)}

        </div>
          
    </div>
}