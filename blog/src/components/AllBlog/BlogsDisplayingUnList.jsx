import {useState ,useEffect} from 'react'
import { BlogTemplate } from './BlogTemplate'
import Link from 'next/link'
export const BlogsDisplayingUnList=({tagSearchedBlogs,isAllBlog})=>{
    const [slicingEnd,setSlicingEnd]=useState(9)
    const handleScroll=()=>{
        if(window.innerHeight+document.documentElement.scrollTop>(document.documentElement.scrollHeight/15)*12 && slicingEnd+1 < tagSearchedBlogs.length)
        {
           setSlicingEnd(i=>i+1)
        }
    }
    
    useEffect(()=>{
     window.addEventListener('scroll',handleScroll)
    },[])
    return <ul className='w-full h-fit grid grid-cols-2 min-[576px]:grid-cols-3 gap-x-[5%] gap-y-5'>
    {tagSearchedBlogs.slice(0,slicingEnd).map(blog=><li key={blog?.id}>
        <Link href={`/Blog/${blog?.id}`}>
        <BlogTemplate blog={blog} isAllBlog={isAllBlog}/>
        </Link>
    </li>)
    }
    
</ul>
}