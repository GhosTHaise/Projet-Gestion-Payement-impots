import {useContext,useState} from 'react'
import Logo from '../Logo'
import {bell,power,user} from "../../assets"
import styles from "../../style"
import { DataContext } from '../../context'
import Navmenu from './Navmenu'
import { AdminLayout } from '../../utils/Auth'
const Navbar = () => {
  const {sessionTKit} = useContext(DataContext);
  return (
    <div className="w-full flex py-4 justify-between items-center navbar">
          <Logo />
          <AdminLayout>
                  <Navmenu  />
          </AdminLayout>
          <div className={`${styles.flexCenter} gap-[40px]`}>
                  <div className={styles.flexCenter}>
                        <img className='w-[40px] h-[40px] mr-4' src={user} alt="user" />
                        <p className='font-poppins font-normal text-[white] text-[16px]'>{sessionTKit.user?.lastname || "undefined"}</p>
                  </div>  
                  <div>
                        <img className='h-[25px] cursor-pointer ' src={bell} alt="notification"  />
                  </div>
                  <div className={`${styles.flexCenter} bg-[#061227] py-4 px-6 rounded-full`}>
                        <p className={`font-poppins font-normal text-white text-[16px] leading-[30.8px] pr-2`}>Deconnexion</p>
                        <img onClick={() => sessionTKit.logout()} className='h-[20px] cursor-pointer' src={power} alt=""  />
                  </div>
                  
          </div>
    </div>
  )
}

export default Navbar