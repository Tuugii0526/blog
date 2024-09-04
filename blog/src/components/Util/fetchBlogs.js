export const fetchBlogs=(setBlogs,tag='',top=0)=>{
    fetch(`https://dev.to/api/articles?${!tag ? "":"tag="+tag}${!top ?"":"&top="+top}`).then(response=>response.json()).then(data=>{
        setBlogs(data.filter(d=>d.cover_image))
    }).catch((err)=>new Error(err))
    
 } 