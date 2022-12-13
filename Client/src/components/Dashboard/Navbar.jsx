import {useContext,useState} from 'react'
import Logo from '../Logo'
import {bell,power,user} from "../../assets"
import styles from "../../style"
import { DataContext } from '../../context'
import Navmenu from './Navmenu'
import { AdminLayout } from '../../utils/Auth'
import { menu , close } from '../../assets'
import { navMenus } from '../../constants'
const Navbar = () => {
  const {sessionTKit,navMenuItems} = useContext(DataContext);
  const [Toggle, setToggle] = useState(false);
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
                  <div onClick={() => sessionTKit.logout()} className={`${styles.flexCenter} bg-[#061227] py-4 sm:px-6 px-4 rounded-full cursor-pointer`}>
                        <p className={`font-poppins font-normal text-white text-[16px] leading-[30.8px] pr-2 sm:flex hidden`}>Deconnexion</p>
                        <img  className='h-[20px] ' src={power} alt=""  />
                  </div>   
                  <div className='md:hidden flex justify-end items-center'>
                        <img onClick={() => setToggle(!Toggle)} src={!Toggle ? menu : close} alt="menu" className='h-[28px] w-[28px] object-contain cursor-pointer'  />
                        <div className={`${!Toggle ? "hidden" : "flex"} flex-col p-6 bg-black-gradient z-[10] absolute 
                        top-20 right-0 mx-1 my-5 min-w-[180px] rounded-xl sidebar`}>
                            <ul className='list-none flex justify-end flex-col items-end flex-1'> 
                                 {
                                    navMenus.map((navMenu,index)=>(
                                          <li key={navMenu.id} onClick={()=>{navMenuItems.setActualMenu(index)  ;/* <--> */ setToggle(false)}} className='font-poppins font-normal cursor-pointer text-white text-[16px]
                                          mb-5'>
                                                {navMenu.name}
                                          </li>
                                    ))
                                 }
                            </ul> 
                        </div>
                  </div>
          </div>
          
    </div>
  )
}

export default Navbar