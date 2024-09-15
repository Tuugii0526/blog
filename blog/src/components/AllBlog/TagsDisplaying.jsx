import {useState} from 'react'
import { TagEditing } from './TagEditing'
import { TagSelection } from './TagSelection'
export const TagsDisplaying=({allTags,isAllBlog})=>{
    const [copiedAllTags,setCopiedAllTags]=useState([...allTags])
    const [isTagEditing,setIsTagEditing]=useState(false)
    return <>
    <div className="w-full  h-fit flex flex-col justify-between relative">
    <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold">All Blog Post</p>
    {isAllBlog &&<>
        <TagSelection allTags={copiedAllTags}/>
    <button className='w-fit ring-1 ring-[#D4A373] font-bold text-xs text-[#495057] rounded-md ' onClick={()=>{
            setIsTagEditing(!isTagEditing)
        }}>Add tags</button>
    </>
    }
    </div>
    {isTagEditing && <TagEditing setIsTagEditing={setIsTagEditing} setAllTags={setCopiedAllTags} allTags={copiedAllTags}/>}
    </>
}