export const takeBlogsByTag=(blogs,tag)=>{
    if(tag=='all')
    { 
        return blogs
    }
const selectedBlogs=blogs.map(blog=>{
    let willBeReturnedObject;
    for(const t of blog?.tag_list)
        {
            if(t==tag)
                {
                   willBeReturnedObject=blog
                   break;
                }
        }
return willBeReturnedObject || 0
})
return selectedBlogs.filter(blog=>blog!=0)
}




    // blog?.tag_list.forEach(t=>{
    //     if(t==tag)
    //     {
    //        willBeReturnedObject=element
    //     }
    //    })
    //    return willBeReturnedObject