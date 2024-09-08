import Image from "next/image";
import { Inter } from "next/font/google";
import  Header  from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Carousel } from "../Hero/Carousel";
import { Trending } from "../Hero/Trending";
import { AllBlog } from "../AllBlog/AllBlog";
const inter = Inter({ subsets: ["latin","cyrillic"] });
export default function HomePage() {
  return  <div className="relative flex flex-col gap-[80px] md:gap-[100px] ">

    <div className="w-full z-10 bg-white sticky top-0 ">
    <div className=" min-w-[320px] max-w-[1230px] mx-auto ">
<Header/>
  </div>
    </div>




    <div className="w-full z-0">
    <div className=" min-w-[320px] max-w-[1230px] py-10 md:pt-0 flex flex-col gap-[100px] mx-auto ">
    <Carousel/>
    <Trending/>
    <AllBlog/>
  </div>
    </div>


  
  

    <div className="w-full  bg-[#F6F6F7] ">
      <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
       <Footer/>
      </div>
    </div>

  </div>
}
