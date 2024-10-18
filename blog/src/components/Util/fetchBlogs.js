// export const fetchBlogs=(setBlogs,tag='',top=0,perPage=30)=>{
//     fetch(`https://dev.to/api/articles?per_page=${perPage}${!tag ? "":"&tag="+tag}${!top ?"":"&top="+top}`).then(response=>response.json()).then(data=>{
//         setBlogs(data)
//     }).catch((err)=>new Error(err))

import { getAllCategoryBlogsWithAllTags } from "./selectTags"

    
//  } 
 const fetchAllBlogCategoryBlogs= async(allBlogObject,page)=>{
    try{
        const response =await fetch(`https://dev.to/api/articles?page=${page}&per_page=1000`);
        const data=await response.json();
        allBlogObject.blogs.push(...data)
        return Promise.resolve()
    }
    catch(err){
      console.log(err)
    }
    // fetch(`https://dev.to/api/articles?page=${page}&per_page=1000`).then(response=>response.json()).then(data=>{allBlogObject.blogs.push(...data)
       
    // }).catch((err)=>{console.log(err,': error in all-blog category blogs fetch')})
    // return Promise.resolve()
 }
 const fetchTopCategoryBlogs= async(topObject)=>{
    try{
        const response =await fetch(`https://dev.to/api/articles/latest?per_page=1000&top=5`);
        const data=await response.json();
        topObject.blogs.push(...data)
        return Promise.resolve()
    }
    catch(err){
      console.log(err)
    }
//     fetch(`https://dev.to/api/articles/latest?per_page=1000&top=1`).then(response=>response.json()).then(data=>{topObject.blogs.push(...data)
       
//     } 
// ).catch((err)=>{console.log(err,': error in top category blogs fetch')})
// return Promise.resolve()
 }
 const fetchTrendingCategoryBlogs=async(trendingObject)=>{
    try{
        const response =await fetch(`https://dev.to/api/articles?per_page=1000&top=100`);
        const data=await response.json();
        trendingObject.blogs.push(...data)
        return Promise.resolve()
    }
    catch(err){
      console.log(err)
    }
 }
 const getBlogsPerCategoryAsyncronously= async()=>{
    const finalAllCategoryBlogs=[
        {
            category_name:'allblog',
            all_tags:[],
            blogs:[]
        },
        {
            category_name:'top',
            all_tags:[],
            blogs:[]
        },
        {
            category_name:'trending',
            all_tags:[],
            blogs:[]
        }
    ]
   try{
    const promises=[]
    for(let i=1;i<21;i++)
        {
          promises.push(fetchAllBlogCategoryBlogs(finalAllCategoryBlogs[0],i))
        }
        promises.push(fetchTopCategoryBlogs(finalAllCategoryBlogs[1]))
        promises.push(fetchTrendingCategoryBlogs(finalAllCategoryBlogs[2]))
        return Promise.all(promises).then(()=>{
            return finalAllCategoryBlogs
         }
         
        )
   }
   catch{(err)=>{
    console.error(err,'error in get blogs per category asynchronously')
   }

   }


 }
 export const fetchAllCategoryBlogs= async(setBlogs)=>{
 
  try {
    const finalAllCategoryBlogs=await  getBlogsPerCategoryAsyncronously()
    const allTagsIncludedFinalAllCategoryBlogs=await getAllCategoryBlogsWithAllTags(finalAllCategoryBlogs)
    setBlogs(allTagsIncludedFinalAllCategoryBlogs)
  } catch (error) {
    console.error(error,'error in fetch all category blogs asynchronously')
  } 
 }