import {useState} from 'react'
import { Routes,Route } from 'react-router-dom'
import Down from "./Down"
import { registeredRoutes } from '../../../constants'
const RegisteredForm = () => {
  const [actualLink, setactualLink] = useState(0);
  return (
    <div className="flex flex-col w-full  glass-effect rounded-xl p-6">
            <h4 className='text-[24px] font-poppins leading-[50px] font-semibold text-[white]'>Create Your Account</h4>
                    
                    {registeredRoutes.map((registeredRoute,index)=> (
                        (index) == actualLink && <registeredRoute.element key={registeredRoute.id} />
                    ))}

            <div className='w-full h-[2px] bg-[#707070]  opacity-75 my-6'/>
            <Down registeredRoutes={registeredRoutes.length} setactualLink={setactualLink} actualLink={actualLink} />
    </div>
  )
}

export default RegisteredForm