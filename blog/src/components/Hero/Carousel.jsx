import { fetchBlogs } from "../Util/fetchBlogs"
export const Carousel=()=>{
    const blogs=fetchBlogs({perPage:10})
    console.log('blogs:',blogs)
    return <div className="hidden md:block w-full h-[651px] relative">
    <div>
     
    </div>
 </div>
}