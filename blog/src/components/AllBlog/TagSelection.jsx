import { Tag } from "./Tag"
import { ViewAll } from "./ViewAll"
export const TagSelection=({allTags})=>{
    // const includedTags=allTags.filter(tag=>tag.included)
    const includedTags=  JSON.parse(localStorage.getItem("includedTags")) || allTags.filter(tag=>tag.included);
    return <div className="w-full min-h-[25px] h-fit flex justify-between">
     <div className=" h-fit w-[90%] flex flex-wrap gap-[4%] ">
        {includedTags.map(tag=>{
            return <Tag key={tag.id} title={tag.title}/>
        })}
     </div>
      <ViewAll/>
    </div>
}