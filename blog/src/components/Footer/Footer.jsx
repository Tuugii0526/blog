import { HomeLogoContact } from "../Header/HomeLogoContact"
import RightsReserved from "./RightsReserved"
import SocialCons from './SocialCons'
 const Footer=()=>{
return <div className="w-full h-[390px] md:h-[430px]  px-0  ">
{/* for mobile */}
 <div className="w-full h-full flex flex-col justify-center gap-7 items-center md:hidden">
  <HomeLogoContact ifFlexCol="flex-col"/>
  <SocialCons/>
  <RightsReserved/>
 </div>
{/* for tablet desktop  */}
 <div className="hidden md:flex w-full h-full  flex-col justify-center gap-6 ">
{/* first  */}
 <div className="w-full h-[236px] flex gap-5 justify-around min-[1230px]:justify-between" >
    <div className="w-[289px] h-full flex flex-col gap-6 ">
     <div className="flex flex-col gap-3 ">
        <p className="font-semibold text-lg text-[#181A2A]">About</p>
        <p className="text-[#696A75]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet consectetur mollitia suscipit perspiciatis labore rem id dolor quis vitae.</p>
     </div>
     <div className="flex flex-col gap-1 ">
      <p className="font-semibold after:content-['Iamtuugii@gmail.com'] after:font-normal after:text-[#696A75]">Email: </p>
      <p className="font-semibold after:content-['+976-90914944'] after:font-normal after:text-[#696A75]">Phone: </p>
     </div>
    </div>
    <div className="relative right-12">
    <HomeLogoContact ifFlexCol="flex-col"/>

    </div>
    <SocialCons/>
</div>
{/* second */}
<div className="w-full h-[95px] flex items-center gap-5 justify-around min-[1230px]:justify-between border-t-[1px] border-[#DCDDDF]">
    <RightsReserved/>
   <div className="flex *:px-[6px] *:border-r-[3px] *:border-r-[#E8E8EA] *:text-[#3B3C4A]">
    <div>Terms of use</div>
    <div>Privacy Policy</div>
    <div>Cookie Policy</div>
   </div>
</div>

 </div>
 
</div>
}
export default Footer
