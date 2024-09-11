import {useState,createContext,useContext,useEffect} from 'react';
import { fetchBlogs } from './Util/fetchBlogs';
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
   return (
   <MenuIsClickedContext.Provider value={isClicked}>
   <MenuHandleClickContext.Provider value={handleMenuClick}>
    <InitialAllBlogsContext.Provider value={blogs}>
        {children}
    </InitialAllBlogsContext.Provider>
   </MenuHandleClickContext.Provider>
   </MenuIsClickedContext.Provider>)
}