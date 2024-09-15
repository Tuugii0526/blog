import { ContextStateProvider } from "../ContextStateProvider"
import Footer from "../Footer/Footer"
const MainLayout=({children})=>{
    return<ContextStateProvider>
         <div className="relative h-full flex flex-col gap-5">
{children}
{/* <footer className="w-full  bg-[#F6F6F7] fixed bottom-0">
  <div className=" min-w-[240px] max-w-[1230px]  mx-auto relative">
   <Footer/>
  </div>
</footer> */}
</div>
    </ContextStateProvider>
}
export default MainLayout



