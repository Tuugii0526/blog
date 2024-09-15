import {useState} from 'react'
import { LeftArrow } from './LeftArrow'
import { RightArrow } from './RightArrow'
import { TagsIcon } from './TagsIcon'
import Link from 'next/link'
import { dateFormatter } from '../Util/dateFormatter'
import { newImage } from '../Util/newBlog'
import { useInitialAllBlogsContext } from '../ContextStateProvider'
export const Carousel=()=>{
    const [topBlogs,setTopBlogs]=useState(useInitialAllBlogsContext({categoryName:'top',whichOne:'blogs'}))
    const [blogIndex,setBlogIndex]=useState(0)
    const indexPlus=()=>{
        if(0>blogIndex-1)
            {
               setBlogIndex(topBlogs.length-1)
            }
            else
            {
               setBlogIndex(i=>i-1)
            }
    }
    const indexMinus=()=>{
        if(topBlogs.length-1<blogIndex+1)
            {
                setBlogIndex(0)
            }
            else
            {
                setBlogIndex(i=>i+1)
            }
    }
    const blog=topBlogs[blogIndex]

    return <div className=" w-full m-auto h-[170px]  min-[400px]:h-[200px]  min-[480px]:h-[220px]   relative flex ">
    {topBlogs.slice(0,10).map(blog=>{
        return  <div className='w-1/2 h-full  rounded-xl shadow-lg ' style={{
            backgroundImage: `url(${blog?.cover_image || newImage })`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}>
        <div className=' h-1/2 w-full rounded-xl flex flex-col justify-center pl-[3px] opacity-95  min-[320px]:w-3/4 min-[320px]:h-2/4 min-[576px]:h-2/5 bg-white relative top-[50%]'>
        
        <div className='w-full h-full flex flex-col justify-around '>
        <TagsIcon blog={blog}/>
        <p className='font-semibold text-xs min-[480px]:text-sm' >{ (blog?.title) ?
        blog?.title.split(/\s+/).slice(0,3).join(' ')+' ...'
        : 'No title'
        }</p>
        </div>
         <p className='text-[#97989F] text-xs leading-6 font-normal min-[480px]:text-sm'>{dateFormatter(blog)}</p>
        </div>
        </div>
    })}
    <LeftArrow indexMinus={indexMinus}/>
  <RightArrow indexPlus={indexPlus}/>
  
</div>
    
}



