import { useContext } from "react"
import { DataContext } from "../../context"
const Navbar = () =>{ 
  const {navigate} =  useContext(DataContext);
  return (
      <div className='w-full flex py-6 justify-between items-center navbar'>
        <div onClick={() => navigate("/")} className='w-[124px] h-[32px] text-white text-[18px] text-center flex items-center cursor-pointer'>
                LOGO
        </div>
      </div>
  ) 
}

export default Navbar