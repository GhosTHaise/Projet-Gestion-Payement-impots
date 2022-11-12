import React from 'react'

const Button = ({text,styles}) => (
    <button className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-md`} type='button'>{text}</button>
  )


export default Button