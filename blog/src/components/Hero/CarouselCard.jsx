import {useState} from 'react'
import { newImage } from '../Util/newBlog'
import { dateFormatter } from '../Util/dateFormatter'
import { TagsIcon } from './TagsIcon'
import Link from 'next/link'
export const CarouselCard=({blog})=>{
    const [generatedImage,setGeneratedImage]=useState(newImage())
    return  <div className='w-full  h-[98%] my-auto  rounded-xl shadow-lg flex-shrink-0 snap-start' style={{
        backgroundImage: `url(${generatedImage })`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}>
      <Link href={`/Blog/${blog.id}`}>
      <div className='w-full h-full'>
      <div className=' h-fit w-full rounded-xl flex flex-col justify-center pl-[3px] opacity-95 min-[576px]:h-2/5 bg-white relative top-[20%] min-[320px]:top-[50%]'>
    
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
      </Link>
    
    </div>
}