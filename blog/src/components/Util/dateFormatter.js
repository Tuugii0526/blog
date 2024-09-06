import { monthSwitch } from "./monthSwitch";
export const dateFormatter=(blog)=>{
const blogDate=blog?.published_at;
const date= new Date(blogDate);
const year=date.getFullYear()
const month=monthSwitch(date.getMonth())
const day=date.getDay()
return `${month} ${day} ,${year}`
}