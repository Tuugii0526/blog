import BIcon from "../svg/BIcon"

const RightsReserved=()=>{
    return <div className="w-[223px] h-[54px] flex justify-end gap-2">
        <BIcon/>
        <div className="h-full flex flex-col gap-0.5 item">
            <p className="font-normal text-xl after:content-['Blog'] after:font-extrabold after:text-xl">Meta</p>
            <div className="flex ">
            <span className="material-symbols-outlined">
copyright
</span>
<p>All rights reserved</p>
            </div>
        </div>
    </div>
}
export default RightsReserved