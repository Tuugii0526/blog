import { Work_Sans } from "next/font/google"
import Link from 'next/link'
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
export const HomeLogoContact=({ifFlexCol=''})=>{
return <ul className={`flex ${ifFlexCol} ${(!ifFlexCol) ? 'gap-10' : 'gap-2'}`}>
 {
    sections.map((section,i)=>
    (<li key={i} className={`text-[#3B3C4A] ${(!ifFlexCol) ? 'hidden' : ''} md:block ${workSans.className}`}  id={section.id}>
<Link href={`/${section.title==='Home' ? '/':section.title}`}>{section.title}</Link>
    </li>))
 }
</ul>


}