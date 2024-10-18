export const LeftArrow=({indexMinus})=>{
return (
    <button className={`arrow-class `} onClick={indexMinus} >
    <span className='scale-[1.75] relative bottom-1'>&lt;</span>
    </button>)
}