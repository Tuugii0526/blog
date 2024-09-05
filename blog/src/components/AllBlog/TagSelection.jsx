import { Tag } from "./Tag"
export const TagSelection=({selectionTags})=>{
    return <div className="w-full h-[25px] flex justify-between">
     <div className="h-full w-[250px]  min-[500px]:w-[360px] flex flex-wrap justify-between ">
        {selectionTags.map(tag=>{
            return <Tag key={tag} title={tag}/>
        })}
     </div>

    </div>
}