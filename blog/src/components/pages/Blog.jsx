import Footer from "../Footer/Footer"
import  Header  from "../Header/Header"

export default function  Blog(){
    return  <div>
    <div className="w-full  ">
    <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
<Header/>
  </div>
    </div>

    <div className="w-full   bg-[#F6F6F7] fixed bottom-0">
    <div className=" min-w-[320px] max-w-[1230px]  mx-auto relative">
<Footer/>
  </div>
    </div>
  </div>
    
    
}