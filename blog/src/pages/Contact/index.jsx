import  ContextStateProvider  from "@/components/ContextStateProvider";
import { Contact } from "@/components/pages/Contact";

export default function ContactPage(){
    return <ContextStateProvider>
        <Contact/>
    </ContextStateProvider>
}