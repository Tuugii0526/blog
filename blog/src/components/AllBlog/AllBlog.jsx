import {useState,createContext,useContext,useEffect,useRef} from 'react'
import { fetchBlogs } from '../Util/fetchBlogs'
import { selectTags } from '../Util/selectTags'
import { TagSelection } from './TagSelection'
import { BlogTemplate } from './blogTemplate'
import { takeBlogsByTag } from '../Util/takeBlogsByTag'
const TagContext=createContext(null)
const SetTagContext=createContext(null)
const SetIndexForThreePagesContext=createContext(null)
export const useSetTagContext=()=>{
    return useContext(SetTagContext)
}
export const useTagContext=()=>{
    return useContext(TagContext)
} 
export const useSetIndexForThreePagesContext=()=>{
    return useContext(SetIndexForThreePagesContext)
}
export const AllBlog=({isAllBlog=true})=>{
    const [blogs,setBlogs]=useState([])
    const [tagSearchedBlogs,setTagSearchedBlogs]=useState([])
    const [selectionTags,setSelectionTags]=useState([])
    const [indexForFifteenPages,setIndexForFifteenPages]=useState(0)
    const [indexForThreePages,setIndexForThreePages]=useState(3)
    const [tag,setTag]=useState('all')
    let blogsRef=useRef(null)
    let bottomButtonRef=useRef(null)
    const getMap=()=>{
        if(!blogsRef.current)
        {
            blogsRef.current=new Map()
            return blogsRef.current
        }
        return blogsRef.current
    }
  const goToTheBlog=(blog)=>{
   const node=blogsRef.current?.get(blog?.id)
   console.log('node is ',node)
   node?.scrollIntoView({
    behavior:"smooth",
    block:'nearest',
    inline:'center'
   })
}
   useEffect(()=>{
    fetchBlogs(setBlogs,'',0,1000)
   },[])
   useEffect(()=>{
    setTagSearchedBlogs(takeBlogsByTag(blogs,tag))
    setSelectionTags(selectTags(blogs))
   },[blogs])
   useEffect(()=>{
       setTagSearchedBlogs(takeBlogsByTag(blogs,tag))
       setIndexForFifteenPages(0)
       setIndexForThreePages(3)
},[tag])
useEffect(()=>{
goToTheBlog(tagSearchedBlogs[indexForFifteenPages+indexForThreePages])
},[indexForThreePages])
useEffect(()=>{
    goToTheBlog(tagSearchedBlogs[indexForFifteenPages])
},[indexForFifteenPages])
    return <div className="w-full h-fit max-h-[1701px] flex flex-col gap-20  ">
        <div className="w-full h-[85px] flex flex-col justify-between ">
    <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold">All Blog Post</p>
        {isAllBlog &&
        <SetTagContext.Provider value={setTag}>
            <TagContext.Provider value={tag}>
                <SetIndexForThreePagesContext.Provider value={setIndexForThreePages}>
                <TagSelection selectionTags={selectionTags}/>
                </SetIndexForThreePagesContext.Provider>
            </TagContext.Provider>
        </SetTagContext.Provider>
        }
        </div>
       <div className='relative h-fit  flex flex-col items-center gap-2' >
        {indexForThreePages>6 && <button  className='sticky top-0 ring-1 px-4 py-1 rounded-md hover:bg-[#4B6BFB0D]  hover:text-[#4B6BFB]' onClick={()=>{
            const bottomButton=bottomButtonRef.current
            bottomButton.scrollIntoView({
                behavior:'smooth',
                block:'nearest',
                inline:'center'
            })
        }}>To the bottom</button>}
       <ul className='w-full h-fit  max-h-[1584px] flex justify-around gap-y-5 items-center flex-wrap overflow-y-scroll '>
            {tagSearchedBlogs.slice(indexForFifteenPages,indexForFifteenPages+15).slice(0,indexForThreePages).map(blog=><li ref={(node)=>{
              const map=getMap()
              if(node)
              {
                map.set(blog?.id,node)
              }
              else
              {
                map.delete(blog?.id)
              }
            }} key={blog?.id}>
                <BlogTemplate blog={blog} isAllBlog={isAllBlog}/>
            </li>)}
        </ul>
        <div className='flex justify-center gap-10'>
        {indexForThreePages>6 && <button ref={bottomButtonRef} className=' ring-1 px-4 py-1 rounded-md  hover:bg-[#4B6BFB0D]  hover:text-[#4B6BFB]' onClick={()=>{
            goToTheBlog(tagSearchedBlogs[indexForFifteenPages])
        }}>Upper blog</button>}
        <button className='ring-1 px-4 py-1 rounded-md z-10 hover:bg-[#4B6BFB0D]  hover:text-[#4B6BFB] ' onClick={()=>{
            if(indexForThreePages+3>15)
            {
               if(indexForFifteenPages+30>tagSearchedBlogs.length)
               {
                setIndexForFifteenPages(0)
                setIndexForThreePages(3)
                  
               }
               else
               {
                setIndexForFifteenPages(p=>p+15)
                setIndexForThreePages(3)
               
               }
            }
            else
            {
                setIndexForThreePages(p=>p+3)
            }
        }}>Load more</button>
        </div>
       </div>
          
    </div>
}