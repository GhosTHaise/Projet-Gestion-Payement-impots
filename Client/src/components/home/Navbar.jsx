import {useState} from 'react'
import { navlinks } from '../../constants'
import { menu , close } from '../../assets';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <div className='w-full flex py-6 justify-between items-center navbar'>
        <div className='w-[124px] h-[32px] text-white text-[18px] text-center flex items-center'>
                LOGO
        </div>
        <ul className='list-none sm:flex hidden items-center justify-start flex-1'>
                {
                    navlinks.map((navlink,index)=>(
                        <li key={navlink.id} className={`font-poppins text-white text-[16px] 
                        cursor-pointer font-normal ${index != navlinks.length - 1 ? "mr-10" : "mr-0"}`}>
                                <a href={`#${navlink.id}`}>{navlink.title}</a>
                        </li>
                    ))
                }
        </ul>
        <div className="sm:flex hidden flex-row items-center">
            <Link to="/SignIn"><div className='text-white text-[16px] mr-5 cursor-pointer'>Sign In</div></Link>
            <Link to="/SignUp"><div className='text-white text-[16px] rounded-sm py-1 px-3 bg-darkOrange cursor-pointer'>Sign Up</div></Link>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img className={`w-[28px] h-[28px] object-contain cursor-pointer`}
                 src={!Toggle ? menu : close} alt="menu" 
                 onClick={() => setToggle(!Toggle)}
                 />
                 <div className={`${Toggle ? "flex" : "hidden"} flex-col p-6 glass-effect z-[10] absolute 
                 top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar`}>
                      <ul className='list-none flex justify-end flex-col items-end flex-1'>  
                        {navlinks.map((navlink,index)=> (
                            <li className={`font-poppins font-normal cursor-pointer text-white text-[16px]
                              mb-5
                            `} key={navlink.id}>
                                <a href={`#${navlink.id}`}>
                                    {navlink.title}
                                </a>
                            </li>
                        ))}
                      </ul>
                      <div className=" flex flex-row items-center mb-2">
                          <Link to="/SignIn"><div className='text-white text-[16px] mr-5 cursor-pointer'>Sign In</div></Link>
                          <Link to="/SignUp"><div className='text-white text-[16px] rounded-sm py-1 px-3 bg-darkOrange cursor-pointer'>Sign Up</div></Link>
                      </div>
                 </div>
        </div>
    </div>
  )
}

export default Navbar