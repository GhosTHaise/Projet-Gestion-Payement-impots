import { useContext } from "react"
import { DataContext } from "../context";

const Logo = () => {
const {navigate,sessionTKit} =  useContext(DataContext);
  return (
    <div onClick={() => !sessionTKit.user ? navigate("/") : navigate("/Dashboard")} className='w-[124px] h-[32px] text-white text-[18px] text-center flex items-center cursor-pointer z-[10]'>
        LOGO
    </div>
  )
}

export default Logo