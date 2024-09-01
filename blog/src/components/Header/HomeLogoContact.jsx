import { Work_Sans } from "next/font/google"
import {Link} from 'react-router-dom'
import React from 'react';
const workSans=Work_Sans({subsets: ["latin"],
    weight:"400"
})

const sections=[{
    id:0,
    title:'Home'
},
{
    id:1,
    title:'Blog'
},
{
    id:2,
    title:'Contact'
}]
export const HomeLogoContact=()=>{
return <ul className="flex gap-10">
 {
    sections.map(section=>
    (<li className={`text-[#3B3C4A] hidden md:block ${workSans.className}`}  id={section.id}>
<a href={`/${section.title==='Home' ? '':section.title}`}>{section.title}</a>
    </li>))
 }
</ul>

}