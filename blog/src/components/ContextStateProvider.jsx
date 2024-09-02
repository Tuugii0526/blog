import {useState,createContext} from 'react';
import { ClickedContext } from './Util/IsClickedContext';
export default function ContextStateProvider({children}){
    console.log(ClickedContext)
   return (
   <ClickedContext.Provider value={false}>
    {children}
   </ClickedContext.Provider>)
}