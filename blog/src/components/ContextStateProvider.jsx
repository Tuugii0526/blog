import {useState,createContext,useContext,useEffect} from 'react';
import { fetchBlogs } from './Util/fetchBlogs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const MenuHandleClickContext=createContext(null)
const MenuIsClickedContext=createContext(null)
const InitialAllBlogsContext=createContext(null)
export const useMenuIsClicked=()=>{
    return useContext(MenuIsClickedContext)
}
export const useMenuHandleClick=()=>{
    return useContext(MenuHandleClickContext)
}
export const useInitialAllBlogsContext=()=>{
    return useContext(InitialAllBlogsContext)
}
export function ContextStateProvider({children}){
    const [isClicked,setIsClicked]=useState(false)
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetchBlogs(setBlogs,'',0,1000)
       },[])
    const handleMenuClick=()=>{
        setIsClicked(!isClicked)
    }
  if(blogs.length>0)
  {
    return (
        <MenuIsClickedContext.Provider value={isClicked}>
        <MenuHandleClickContext.Provider value={handleMenuClick}>
         <InitialAllBlogsContext.Provider value={blogs}>
             {children}
         </InitialAllBlogsContext.Provider>
        </MenuHandleClickContext.Provider>
        </MenuIsClickedContext.Provider>)
  }
  else
  {

      return <div className="relative flex flex-col gap-[80px] md:gap-[100px] ">

      <div className="w-full z-10 bg-white sticky top-0 ">
      <div className=" min-w-[320px] max-w-[1230px] mx-auto ">
      <Header/>
      </div>
      </div>
      <p className='text-center font-extrabold '>Loading   ...</p>
      <div className="w-full  bg-[#F6F6F7] relative bottom-0">
        <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
         <Footer/>
        </div>
      </div>
      </div>
  }
}