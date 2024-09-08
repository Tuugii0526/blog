import { Tag } from "./Tag"
import { ViewAll } from "./ViewAll"
export const TagSelection=({allTags})=>{
    return <div className="w-full h-[25px] flex justify-between">
     <div className="pl-2 min-[1230px]:pl-0 h-full w-[250px]  min-[500px]:w-[400px] min-[800px]:w-[500px] flex flex-wrap gap-[4%] ">
        {allTags.filter(tag=>tag.included).map(tag=>{
            return <Tag key={tag.id} title={tag.title}/>
        })}
     </div>
      <ViewAll/>
    </div>
}