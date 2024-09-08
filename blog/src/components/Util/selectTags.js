export const selectTags=(blogs)=>{
const tagPerCount={}
let counter=0
blogs.forEach(blog=>{
    if(blog.hasOwnProperty('tag_list'))
    {
        blog['tag_list'].forEach(tag=>{
            tagPerCount[tag] = (tagPerCount[tag] || 0)+1 
        })
    }
})
const topTags=[{
    id:'001',
    title:'all',
    included:true,
    included_blog:'all'
}]
const numbers =Object.values(tagPerCount).sort((a,b)=>b-a)
const noReplicaNumbers=[...new Set(numbers)]
Object.keys(tagPerCount).forEach((object,index)=>{
    noReplicaNumbers.forEach(num=>{ 
        if(tagPerCount[object]===num)
        {
            if(counter<5)
            {
                topTags.push({
                    id:index,
                    title:object,
                    included: true,
                    included_blog:num
                })
            }
            else
            {
                topTags.push({
                    id:index,
                    title:object,
                    included: false,
                    included_blog:num
                })
            }
            counter++
        }
    })
})
return topTags.sort((a,b)=>b.included_blog-a.included_blog).slice(0,100)
}