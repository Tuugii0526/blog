export const CheckForTag=({setAllTags,allTags,tag})=>{
  return <div className="w-full h-fit flex justify-around *:text-[10px]">
  <p className=" w-[100px]"><span className="font-bold text-xs leading-6">Tag:</span>{tag.title}</p>
  <p className=" w-[100px]"><span className="font-bold text-xs leading-6">Included blogs:</span>{tag.included_blog}</p>
    <label className=" w-[100px]">
    <input type="checkbox" checked={tag.included} onChange={(e)=>{
        setAllTags(allTags.map(t=>{
            if(t.id===tag.id)
            {
                return {...tag,included:e.target.checked}
            }
            else
            {
                return t
            }
        }))
    }}/> Check tag
  </label>
  </div>
}