import Image from "next/image";
import { Inter } from "next/font/google";
import  Header  from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Carousel } from "../Hero/Carousel";
import { Trending } from "../Hero/Trending";
import { AllBlog } from "../AllBlog/AllBlog";
const inter = Inter({ subsets: ["latin","cyrillic"] });
export default function HomePage() {
  return  <div className="w-full z-0">
  <div className=" min-w-[320px] max-w-[1230px]  flex flex-col gap-[100px] mx-auto ">
  <Carousel/>
  <Trending/>
  <AllBlog/>
</div>
  </div>
}
