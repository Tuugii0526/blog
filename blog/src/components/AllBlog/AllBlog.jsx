import {useState,createContext,useContext,useEffect,useRef} from 'react'
import { fetchBlogs } from '../Util/fetchBlogs'
import { selectTags } from '../Util/selectTags'
import { TagSelection } from './TagSelection'
import { BlogTemplate } from './blogTemplate'
import { takeBlogsByTag } from '../Util/takeBlogsByTag'
import { CheckForTag } from './checkForTag'
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
    const [allTags,setAllTags]=useState([])
    const [indexForFifteenPages,setIndexForFifteenPages]=useState(0)
    const [indexForThreePages,setIndexForThreePages]=useState(3)
    const [tag,setTag]=useState('all')
    const [isTagEditing,setIsTagEditing]=useState(false)
    let allTagsNotForState=[...allTags]
    //for tags editing
    const [isSortingAlphabet,setIsSortingAlphabet]=useState(false)
    const [tagSearchText,setTagSearchText]=useState('')
    //for tags editing
    if(isSortingAlphabet)
    { 
        allTagsNotForState.sort((a,b)=>{
            if(a.title<b.title)
            {
                return -1
            }
            else
            {
                return 1
            }
            return 0
        })
    }
    if(tagSearchText)
    {
        allTagsNotForState=allTagsNotForState.filter(tag=>{
            if(tag.title.indexOf(tagSearchText.toLowerCase())!==-1)
            {
                return tag
            }
        })
    }
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
    setAllTags(selectTags(blogs))
   },[blogs])
   useEffect(()=>{
       setTagSearchedBlogs(takeBlogsByTag(blogs,tag))
       setIndexForFifteenPages(0)
       setIndexForThreePages(3)
},[tag])
useEffect(()=>{
goToTheBlog(tagSearchedBlogs[indexForFifteenPages+indexForThreePages-1])
},[indexForThreePages])
useEffect(()=>{
    goToTheBlog(tagSearchedBlogs[indexForFifteenPages])
},[indexForFifteenPages])
    if(isTagEditing)
    { 
        return <ul className='flex flex-col gap-2 items-center relative w-[80%] max-h-[600px] mx-auto rounded-2xl border-t-2 border-t-[#D4A373] border-b-2 border-b-[#D4A373]   overflow-y-scroll   shadow-lg'>
            <p className='font-bold text-xs leading-6 text-white bg-[#D4A373] border-t-2 border-t-white px-8 text-center sticky top-0 rounded-xl'>Tags   editing</p>
            <div className='flex justify-center gap-2 sticky top-8 bg-white'>
                <label className='gap-0.5' >
                    <input type="checkbox" checked={isSortingAlphabet}className='text-xs' onChange={(e)=>{setIsSortingAlphabet(e.target.checked)}}/>
                    Sort alphabetically
                </label>
                <label >
                    <input type="text"  className='px-4 ring-1 rounded-sm ' value={tagSearchText} placeholder='Search tag' onChange={(e)=>{
                        setTagSearchText(e.target.value)
                    }} />
                </label>
            </div>

         {allTagsNotForState.map(tag=>{
            return <li key={tag.id}>
            <CheckForTag setAllTags={setAllTags} allTags={allTags} tag={tag}/>
          </li>
         })}
         <button className='font-bold text-xs leading-6 text-white bg-[#D4A373]  sticky bottom-0 rounded-xl px-8' onClick={()=>{
            setIsTagEditing(!isTagEditing)
         }}>Done</button>
        </ul>
    }
    else
    {
        return <div className="w-full h-fit max-h-[1701px] flex flex-col gap-20  ">
        <div className="w-full h-[85px] flex flex-col justify-between relative">
    <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold">All Blog Post</p>
        {isAllBlog &&
        <SetTagContext.Provider value={setTag}>
            <TagContext.Provider value={tag}>
                <SetIndexForThreePagesContext.Provider value={setIndexForThreePages}>
                <TagSelection allTags={allTags}/>
                </SetIndexForThreePagesContext.Provider>
            </TagContext.Provider>
        </SetTagContext.Provider>
        }
        {
            isAllBlog && <button className='absolute bottom-0 right-[70px] px-3 ring-[#D4A373] text-[#495057] rounded-md font-bold text-xs leading-6 ring-1' onClick={()=>{
                setIsTagEditing(!isTagEditing)
            }}>Edit tags</button>
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
}