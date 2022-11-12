import React from 'react'
import styles from '../style'
import Button from './Button'
const LoginForm = () => 
  (
    <div className={`text-white h-full ${styles.flexCenter} flex-col`}>
        <h4 className='mb-5 text-bold text-[42px] text-gradient'>Login</h4>
        <div className='flex flex-col'>
            <input placeholder='Username' className='mb-5 px-3 py-3 rounded-md outline-none bg-primary border' type="text" name='username' />
            <input placeholder='Password' className='mb-5 px-3 py-3 rounded-md outline-none bg-primary border' type="text" name='username' />
            <Button text="Login" styles="mt-4" />
        </div>
    </div>
  )


export default LoginForm