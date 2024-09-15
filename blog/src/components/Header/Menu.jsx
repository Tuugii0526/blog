import {useState} from 'react'
export const Menu=()=>{
    const [menuIsClicked,setMenuIsClicked]=useState(false)
    return <div className="md:hidden " onClick={()=>{
        setMenuIsClicked(!menuIsClicked)
      }}>
      {
         menuIsClicked ? 
         <span className="material-symbols-outlined">
close
</span>
         :
         <span className="material-symbols-outlined ">
             menu
             </span>
      }
      </div>
}