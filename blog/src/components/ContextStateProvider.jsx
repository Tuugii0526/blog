import {useState,createContext,useContext,useEffect} from 'react';
import { fetchAllCategoryBlogs } from './Util/fetchBlogs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const InitialAllBlogsContext=createContext(null)
export const useInitialAllBlogsContext=({categoryName,whichOne})=>{
  const initialAllBlogs= useContext(InitialAllBlogsContext)
  const object=initialAllBlogs?.find(blogObj=>blogObj.category_name==categoryName)
  switch(whichOne)
  {
    case 'blogs':
      {
        return object?.blogs
      }
    case 'all_tags':
      {
        return object?.all_tags
      }
  }
}
export function ContextStateProvider({children}){
    const [allCategoryBlogs,setAllCategoryBlogs]=useState([])
    console.log('all category obj',allCategoryBlogs)
    useEffect(()=>{
         fetchAllCategoryBlogs(setAllCategoryBlogs)
       },[])
  if(allCategoryBlogs.length>0)
  {
   if(allCategoryBlogs[0].blogs.length>0)
   {
    return (
      <InitialAllBlogsContext.Provider value={allCategoryBlogs}>
          {children}
      </InitialAllBlogsContext.Provider>)
   }
   else
   {
    return <div className="relative flex flex-col h-full ">

    <div className="w-full z-10 bg-white sticky top-0 ">
    <div className=" min-w-[240px] max-w-[1230px] mx-auto ">
    <Header/>
    </div>
    </div>
    <p className='text-center font-extrabold '>No internet connection</p>
    <div className="w-full  bg-[#F6F6F7] relative bottom-0">
      <div className=" min-w-[240px] max-w-[1230px]  mx-auto relative">
       <Footer/>
      </div>
    </div>
    </div>
   }
  }
  else
  {
      return <div className="relative flex flex-col ">

      <div className="w-full z-10 bg-white sticky top-0 ">
      <div className=" min-w-[240px] max-w-[1230px] mx-auto ">
      <Header/>
      </div>
      </div>
      <p className='text-center font-extrabold '>Loading...</p>
      <div className="w-full  bg-[#F6F6F7] relative bottom-0">
        <div className=" min-w-[240px] max-w-[1230px]  mx-auto relative">
         <Footer/>
        </div>
      </div>
      </div>
  }
}