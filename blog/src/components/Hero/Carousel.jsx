import {useState,useEffect} from 'react'
import { fetchBlogs } from '../Util/fetchBlogs'
import { LeftArrow } from './LeftArrow'
import { RightArrow } from './RightArrow'
import { TagsIcon } from './TagsIcon'
import Link from 'next/link'
import { dateFormatter } from '../Util/dateFormatter'
import { newImage } from '../Util/newBlog'
export const Carousel=()=>{
    const [blogs,setBlogs]=useState([])
    const [blogIndex,setBlogIndex]=useState(0)
    const indexPlus=()=>{
        if(0>blogIndex-1)
            {
               setBlogIndex(blogs.length-1)
            }
            else
            {
               setBlogIndex(i=>i-1)
            }
    }
    const indexMinus=()=>{
        if(blogs.length-1<blogIndex+1)
            {
                setBlogIndex(0)
            }
            else
            {
                setBlogIndex(i=>i+1)
            }
    }
    const blog=blogs[blogIndex]
    useEffect(()=>{
     fetchBlogs(setBlogs)
    },[])
   if(!blogs.length)
   {
    return <div className="hidden md:block w-[98%] mx-auto h-[600px] shadow-lg relative "></div>
   }
   else
   {
    return <div className="hidden md:block w-[98%] mx-auto h-[651px]  relative ">
    <Link href={`/Blog/${blog?.id}`}>
<div className='w-full h-[600px] rounded-xl shadow-lg relative' style={{
    backgroundImage: `url(${blog?.cover_image || newImage })`,
    backgroundSize:'cover',
    backgroundPosition:'center'
    
}}>
<div className='absolute h-[252px] w-1/2 max-w-[598px] shadow-2xl rounded-xl border-solid border-[#E8E8EA] p-10 flex flex-col justify-center  gap-6 bottom-5 left-5 bg-white'>
<div className='w-full h-[124px] flex flex-col justify-between '>
<TagsIcon blog={blog}/>
<p className='leading-10 font-semibold text-4xl line-clamp-2' >{ (blog.title) ?
blog?.title.split(/\s+/).slice(0,6).join(' ')+' ...'
: 'No title'
}</p>
</div>
 <p className='text-[#97989F] text-lg leading-6 font-normal'>{dateFormatter(blog)}</p>
</div>
</div>
</Link>
    <LeftArrow indexMinus={indexMinus}/>
  <RightArrow indexPlus={indexPlus}/>
  
</div>
   }
    
}



