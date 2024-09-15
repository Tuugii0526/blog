import { MetaLogo } from "../svg/MetaLogo"
import { Menu } from "./Menu"
import { Navigation } from "./Navigation"
import {useState} from 'react'
export default function Header() {
    return <div className="w-full h-[100px] border-b-solid border-b-[0.1px] border-b-slate-400 p-4  flex justify-between items-center ">
             <MetaLogo/>
             <Navigation/>
             <Menu/>
        </div>
}