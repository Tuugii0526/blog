import { useSetTagContext } from "./AllBlog"
import { useState } from "react"
export const Tag=({title})=>{
    const titleLettersArray=title.split('')
 titleLettersArray[0]=titleLettersArray[0].toUpperCase()
 const upperTitle=titleLettersArray.join('')
   const [isTagActive,setIsTagActive]=useState(false)
    const setTag=useSetTagContext()
    let className
    if(isTagActive)
    {
        className='text-[#D4A373]'
    }
    else
    {
        className='text-[#495057]'
    }
    return <button className={`${className} font-bold text-xs leading-6`} onClick={()=>{
        setTag(title)
        setIsTagActive(!isTagActive)
    }}>{upperTitle}</button>
}