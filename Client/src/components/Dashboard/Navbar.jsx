import {useContext} from 'react'
import Logo from '../Logo'
import {bell,power,user} from "../../assets"
import styles from "../../style"
import { DataContext } from '../../context'
const Navbar = () => {
  const {sessionTKit} = useContext(DataContext);
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
          <Logo />
          <div className={`${styles.flexCenter} gap-[40px]`}>
                  <div className={styles.flexCenter}>
                        <img className='w-[40px] h-[40px] mr-4' src={user} alt="user" />
                        <p className='font-poppins font-normal text-[white] text-[16px]'>{sessionTKit.user?.lastname || "undefined"}</p>
                  </div>  
                  <div>
                        <img className='h-[25px] cursor-pointer ' src={bell} alt="notification"  />
                  </div>
                  <img onClick={() => sessionTKit.logout()} className='h-[25px] cursor-pointer' src={power} alt=""  />
          </div>
    </div>
  )
}

export default Navbar