export const LeftArrow=({indexMinus})=>{
return (
    <div className={`arrow-class absolute bottom-0 right-[56px] `} onClick={indexMinus} >
    <span className='scale-[1.75] relative bottom-1'>&lt;</span>
    </div>)
}