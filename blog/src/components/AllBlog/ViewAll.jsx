import {useState} from 'react'
import { useSetIndexForThreePagesContext } from './AllBlog'
export const ViewAll=()=>{
    const [isClicked,setIsClicked]=useState(false)
    const setIndexForThreePages=useSetIndexForThreePagesContext()
    return <button className={`font-bold text-xs leading-6 text-[#D4A373]`} onClick={()=>{
        setIsClicked(!isClicked)
        if(!isClicked)
        {
           setIndexForThreePages(15)
        }
        else
        {
            setIndexForThreePages(6)
        }
    }}>{
        isClicked ? 'View a few' :'View all'}
        </button>
}