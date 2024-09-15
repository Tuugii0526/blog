import { useSetTagContext, useTagContext } from "./AllBlogSub"

export const Tag=({title})=>{
    const titleLettersArray=title.split('')
 titleLettersArray[0]=titleLettersArray[0].toUpperCase()
 const upperTitle=titleLettersArray.join('')
 const setTag=useSetTagContext()
 const tag=useTagContext()
    let className
    if(tag==title)
    {
        className='text-[#D4A373]'
    }
    else
    {
        className='text-[#495057]'
    }
    return <button className={`${className} font-bold text-xs leading-6`} onClick={()=>{
        setTag(title)
    }}>{upperTitle}</button>
}