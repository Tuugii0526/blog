import { Inter } from "next/font/google";
import { ContextStateProvider}  from "@/components/ContextStateProvider";
import HomePage from "@/components/pages/HomePage";
export default function Home() {
  return  (
  <ContextStateProvider>
    <HomePage/>
  </ContextStateProvider>)
}
