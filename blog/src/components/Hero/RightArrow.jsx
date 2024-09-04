import {useState} from 'react'
export const RightArrow=({indexPlus})=>{
    const [hover,setHover]=useState(false)
    let hoverClass='';
    if(hover)
    {
        hoverClass='bg-black text-white cursor-pointer'
    }
    return   <div className={`w-7 h-7  rounded-md border border-gray-700 absolute bottom-0 right-2  flex justify-center items-center  shadow-md ${hoverClass}`}onPointerEnter={()=>{
        setHover(true)
     }} onPointerLeave={()=>{
        setHover(false)
     }} onClick={indexPlus}><span className='scale-[1.75] relative bottom-1'>&gt;</span></div>
}