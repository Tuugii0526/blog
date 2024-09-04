import  {ContextStateProvider}  from "@/components/ContextStateProvider";
import { ContactPage } from "@/components/pages/ContactPage";

export default function Contact(){
    return <ContextStateProvider>
        <ContactPage/>
    </ContextStateProvider>
}