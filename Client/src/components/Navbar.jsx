import React from 'react'
import { navlinks } from '../constants'
const Navbar = () => {
  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
        <div className='w-[124px] h-[32px] text-white text-[18px] text-center flex items-center'>
                LOGO
        </div>
        <ul className='list-none sm:flex hidden items-center justify-start flex-1'>
                {
                    navlinks.map((navlink,index)=>(
                        <li key={navlink.id} className={`font-poppins text-white text-[14px] 
                        cursor-pointer font-normal ${index != navlinks.length - 1 ? "mr-10" : "mr-0"}`}>
                                <a href={`#${navlink.id}`}>{navlink.title}</a>
                        </li>
                    ))
                }
        </ul>
        <div className="flex flex-row items-center">
            <div className='text-white text-[14px] mr-5 cursor-pointer'>Sign In</div>
            <div className='text-white text-[14px] cursor-pointer'>Sign Up</div>
        </div>
    </div>
  )
}

export default Navbar