import  {ContextStateProvider}  from "@/components/ContextStateProvider";
import Blog from "@/components/pages/Blog";

export default function BlogPage(){
    return <ContextStateProvider>
        <Blog/>
    </ContextStateProvider>
}