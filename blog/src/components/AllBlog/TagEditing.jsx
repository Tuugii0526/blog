import { CheckForTag } from "./CheckForTag"
import { useState } from "react"
export const  TagEditing=({setIsTagEditing,setAllTags,allTags})=>{
    let allTagsNotForState=[...allTags]
    //for tags editing
    const [isSortingAlphabet,setIsSortingAlphabet]=useState(false)
    const [tagSearchText,setTagSearchText]=useState('')
    //for tags editing
    const includedTags=allTagsNotForState.filter(tag=>tag.included)
    // localStorage.removeItem("includedTags")
    localStorage.setItem("includedTags",JSON.stringify(includedTags))
    
    if(isSortingAlphabet)
    { 
        allTagsNotForState.sort((a,b)=>{
            if(a.title<b.title)
            {
                return -1
            }
            else
            {
                return 1
            }
            return 0
        })
    }
    if(tagSearchText)
    {
        allTagsNotForState=allTagsNotForState.filter(tag=>{
            if(tag.title.indexOf(tagSearchText.toLowerCase())!==-1)
            {
                return tag
            }
        })
    }
  return <ul className='flex flex-col gap-2 items-center relative w-[80%] max-h-[600px] mx-auto rounded-2xl border-t-2 border-t-[#D4A373] border-b-2 border-b-[#D4A373]   overflow-y-scroll   shadow-lg'>
  <p className='font-bold text-xs leading-6 text-white bg-[#D4A373] border-t-2 border-t-white px-8 text-center sticky top-0 rounded-xl'>Tags   editing</p>
  <div className='flex justify-center gap-2 sticky top-8 bg-white'>
      <label className='gap-0.5' >
          <input type="checkbox" checked={isSortingAlphabet}className='text-xs' onChange={(e)=>{setIsSortingAlphabet(e.target.checked)}}/>
          Sort alphabetically
      </label>
      <label >
          <input type="text"  className='px-4 ring-1 rounded-sm ' value={tagSearchText} placeholder='Search tag' onChange={(e)=>{
              setTagSearchText(e.target.value)
          }} />
      </label>
  </div>

{allTagsNotForState.map(tag=>{
  return <li key={tag.id} className='w-full'>
  <CheckForTag setAllTags={setAllTags} allTags={allTags} tag={tag}/>
</li>
})}
<button className='font-bold text-xs leading-6 text-white bg-[#D4A373]  sticky bottom-0 rounded-xl px-8' onClick={()=>{
  setIsTagEditing((pre)=>!pre)
}}>Done</button>
</ul>
}