import Image from "next/image";
import { Inter } from "next/font/google";
import  Header  from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin","cyrillic"] });
export default function HomePage() {
  return  <div className="relative">

    <div className="w-full  ">
    <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
<Header/>
  </div>
    </div>


    <div className="w-full  bg-[#F6F6F7] fixed bottom-0">
      <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
       <Footer/>
      </div>
    </div>

  </div>
}
