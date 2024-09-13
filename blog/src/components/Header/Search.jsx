import {useState} from 'react'
export const Search=()=>{
    const [query,setQuery]=useState('')
    const handleQueryInput=(e)=>{
   setQuery(e.target.value)
    }
    console.log('query is:',query)
    return <div className="hidden md:block">
        <div className="h-9 w-[166px] flex justify-between bg-[#F4F4F5] p-2 pl-4 shadow-md  rounded-[5px]">
        <input  className="w-[75%] bg-[#F4F4F5] outline-none " type="text" placeholder="Search" value={query} onChange={(e)=>{
      handleQueryInput(e)
        }}/>
       <div >
       <span  className="material-symbols-outlined">
search
</span>
       </div>
    </div>
    {query && <div className='fixed w-full h-full min-[1024px]:w-[768px] min-[1024px]:h-[98%] min-[1024px]:mx-auto min-[1024px]:my-auto  bg-white min-[1024px]:rounded-2xl  inset-y-0 inset-x-0 shadow-[0_0_0_1000px_rgba(52,58,70,.8)]'></div>}
    </div>
}
// h-[98%] bg-slate-400 rounded-2xl