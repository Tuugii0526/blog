import { ContextStateProvider } from "@/components/ContextStateProvider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Error(){
    return <ContextStateProvider>
        <div className="relative flex flex-col gap-[100px]">

<div className="w-full z-10 bg-white sticky top-0 ">
<div className=" min-w-[320px] max-w-[1230px] mx-auto ">
<Header/>
</div>
</div>




<h2>Error</h2>



<div className="w-full  bg-[#F6F6F7] fixed bottom-0 ">
  <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
   <Footer/>
  </div>
</div>

</div>
    </ContextStateProvider>
}