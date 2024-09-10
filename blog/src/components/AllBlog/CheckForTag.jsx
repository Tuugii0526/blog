export const CheckForTag=({setAllTags,allTags,tag})=>{
  return <div className="w-full h-fit  grid grid-cols-3 *:text-[10px] ">
  <p className="flex items-center"><span className="font-bold text-xs leading-6">Tag:</span>{tag.title?.split('').map((l,i)=>{
    if(i==0)
    {
      return l.toUpperCase(0)
    }
    return l
  }).join('')}</p>
  <p className="flex items-center"><span className="font-bold text-xs leading-6">Included blogs:{' '}</span>{tag.included_blog}</p>
    <label className="flex items-center">
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