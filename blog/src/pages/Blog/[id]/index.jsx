import { ContextStateProvider } from "@/components/ContextStateProvider"
import { SinglePage } from "@/components/pages/SinglePage"

export default function SingleBlog(){
    return <ContextStateProvider>
        <SinglePage/>
    </ContextStateProvider>
}