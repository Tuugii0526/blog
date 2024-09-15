import {useState} from 'react'
export const ViewInDetail=({description})=>{
    const [isDetailed,setIsDetailed]=useState(false)
    const descriptionArrayLength=description?.split(/[\s+///]/).length
    const briefDescription=description?.split(/[\s+///]/).slice(0,3).join(' ')+' ...'
    let classNameDescription='text-wrap text-xs min-[480px]:text-sm'
    let classNameLessMore='w-fit h-fit ring-1 rounded-sm px-2 font-bold text-xs min-[480px]:text-sm '
    const handleClick=()=>{
        setIsDetailed(!isDetailed)
    }
     return <div className='flex gap-2 flex-wrap'>
            <p className={`${classNameDescription}`}>{isDetailed ?description : briefDescription}</p>
            {
                descriptionArrayLength<=3 
                ? ''
                : <button className={`${classNameLessMore}`} onClick={(e)=>{
                    e.preventDefault();
                    handleClick()
                }}>{isDetailed ? 'Less' : 'More'}</button>
            }
        </div>
   
}