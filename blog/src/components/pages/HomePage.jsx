import { Carousel } from "../Hero/Carousel";
import { Trending } from "../Hero/Trending";
import { AllBlog } from "../AllBlog/AllBlog";
import {useEffect} from 'react'
import { useMenuHandleClick,useMenuIsClicked } from "../ContextStateProvider";
export default function HomePage() {
  const menuIsClicked=useMenuIsClicked()
  const handleMenuClick=useMenuHandleClick();
  useEffect(()=>{
 if(menuIsClicked)
{
handleMenuClick()
}
  },[])
  return  <div className="w-full z-0">
  <div className=" min-w-[320px] max-w-[1230px]  flex flex-col gap-[100px] mx-auto ">
  <Carousel/>
  <Trending/>
  <AllBlog key={0} />
</div>
  </div>
}
