import { ContextStateProvider } from "../ContextStateProvider"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const MainLayout=({children})=>{
    return<ContextStateProvider>
         <div className="relative flex flex-col gap-[80px] md:gap-[100px] ">

<div className="w-full z-10 bg-white sticky top-0 ">
<div className=" min-w-[320px] max-w-[1230px] mx-auto ">
<Header/>
</div>
</div>
{children}
<div className="w-full  bg-[#F6F6F7] relative bottom-0">
  <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
   <Footer/>
  </div>
</div>
</div>
    </ContextStateProvider>
}
export default MainLayout



