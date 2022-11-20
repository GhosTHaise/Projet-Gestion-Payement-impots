import React from 'react'

const InputField = ({type,placeholder}) => {
  return (
    <input placeholder={placeholder} type={type} className={`glass-effect w-full text-[16px] rounded-lg outline-none text-[white] relative px-4 py-4 mt-2`} />
  )
}

export default InputField