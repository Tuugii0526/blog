export const selectTags=(blogs)=>{
const tagPerCount={}
blogs.forEach(blog=>{
    if(blog.hasOwnProperty('tag_list'))
    {
        blog['tag_list'].forEach(tag=>{
            tagPerCount[tag] = (tagPerCount[tag] || 0)+1 
        })
    }
})
const topTags=[]
const topNumbers =Object.values(tagPerCount).sort((a,b)=>b-a).slice(0,5)
Object.keys(tagPerCount).forEach(object=>{
    topNumbers.forEach(num=>{ 
        if(tagPerCount[object]===num)
        {
            topTags.push(object)
        }
    })

})
console.log('topNumbers',topNumbers)
console.log('topTags',topTags)
return ['all',...new Set(topTags)]
}