export const fetchBlogs=(setBlogs,tag='',top=0,perPage=30)=>{
    fetch(`https://dev.to/api/articles?per_page=${perPage}${!tag ? "":"&tag="+tag}${!top ?"":"&top="+top}`).then(response=>response.json()).then(data=>{
        setBlogs(data)
    }).catch((err)=>new Error(err))
    
 } 