import  {ContextStateProvider}  from "@/components/ContextStateProvider";
import BlogPage from "@/components/pages/BlogPage";

export default function Blog(){
    return <ContextStateProvider>
        <BlogPage/>
    </ContextStateProvider>
}