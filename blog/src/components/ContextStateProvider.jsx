import {useState,createContext,useContext} from 'react';
const MenuHandleClickContext=createContext(null)
const MenuIsClickedContext=createContext(null)
export const useMenuIsClicked=()=>{
    return useContext(MenuIsClickedContext)
}
export const useMenuHandleClick=()=>{
    return useContext(MenuHandleClickContext)
}
export function ContextStateProvider({children}){
    const [isClicked,setIsClicked]=useState(false)
    const handleMenuClick=()=>{
        setIsClicked(!isClicked)
    }
   return (
   <MenuIsClickedContext.Provider value={isClicked}>
   <MenuHandleClickContext.Provider value={handleMenuClick}>
    {children}
   </MenuHandleClickContext.Provider>
   </MenuIsClickedContext.Provider>)
}