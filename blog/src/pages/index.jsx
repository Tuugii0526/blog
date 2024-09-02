import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin","cyrillic"] });
// const inter = Inter({
//   subsets: ["latin"],
//   fontWeight: "bold",
//   fontStyle: "italic",
//   fontSize: "24px",
//   lineHeight: "1.2",
//   letterSpacing: "1px",
//   textTransform: "uppercase",
//   fontVariants: ["small-caps"]
// });
// className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}

{/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
const fetchData=()=>{
  fetch('https://dev.to/api/articles').then(response=>response.json()).then(date=>)
}
export default function Home() {
  return  <div className=" min-w-[320px] max-w-[1230px] mx-auto flex justify-center items-center ">
<Header/>
  </div>
}