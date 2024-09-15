import {useState} from 'react'
export const ViewAll=()=>{
    const [isClicked,setIsClicked]=useState(false)
    return <button className={`font-bold text-xs leading-6 text-[#D4A373] mr-2`} onClick={()=>{
        setIsClicked(!isClicked)
    }}>{
        isClicked ? 'View less' :'View all'}
        </button>
}