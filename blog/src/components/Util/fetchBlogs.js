export const fetchBlogs=({perPage=0,tag="",tags="",top=0,userName="",fresh="",rising=""})=>{
  return fetch(`https://dev.to/api/articles${!perPage ? '':'?per_page='+perPage}`).then(response=>response.json()).catch(new Error('noo mistake'))
} 