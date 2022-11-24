import React from 'react'
import { First , Second , Third } from './FragmentForm'
import { Routes,Route } from 'react-router-dom'
const RegisteredForm = () => {
  return (
    <div className="flex flex-col w-full  glass-effect rounded-xl p-6">
            <h4 className='text-[24px] font-poppins leading-[50px] font-semibold text-[white]'>Create Your Account</h4>
                <Routes>
                    <Route path="first" element={<First/>} />
                    <Route path="second" element={<Second/>} />
                </Routes>

    </div>
  )
}

export default RegisteredForm