import styles from '../../style'
import InputField from './InputField'
import Error from './Error'
import {checkCircle} from "../../assets"
import { useState } from 'react'

const LoginForm = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
 return (
    <div className='flex flex-col w-full  glass-effect rounded-xl p-6'>
        <div className={`flex flex-1 justify-between items-center`}>
            <h4 className='text-[22px] font-poppins leading-[50px] font-semibold text-[white]'>Login</h4>
        </div>
        <div className={`${styles.flexStart} flex-col mt-4`}>
            <label className={`${styles.paragraph}`}>Email</label>
            <InputField stateChange={setEmail} type="text" placeholder="Example@gmail.com"/>
            <Error>
                Your Email is not valid.
            </Error>
            <label className={`${styles.paragraph}`}>Password</label>
            <div className='w-full relative'>
                <InputField stateChange={setPassword} type="password" placeholder=""/>
                <img className={`${Password.length >= 8 ? "block" : "hidden"} absolute w-[30px] h-[30px] right-4 top-[50%] translate-y-[-35%]`} src={checkCircle} alt="validate" />
            </div>
            <Error>
                At least 8 characters.
            </Error>
            <div className='w-full h-[2px] bg-[#707070]  opacity-40 my-4'/>
            <button className='w-full text-[white] glass-effect rounded-full py-5 border-solid border-[#7a7a7a] border-[1px] font-poppins font-normal text-[18px] mt-3'>Sign In</button>
            <div className={`w-full ${styles.flexCenter} mt-4`}>
                <p className={`font-poppins text-dimWhite text-[15px] leading-[35px]`}>
                    Don't have an account ? <span className='text-[white] cursor-pointer'>Create your account now</span>
                </p>
            </div>
        </div>
    </div>
  )
 }
export default LoginForm