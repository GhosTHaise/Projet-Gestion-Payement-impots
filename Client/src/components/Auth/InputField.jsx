import React from 'react'

const InputField = ({type,placeholder,stateChange,adjusted}) => {
  return (
    <input onChange={ e => stateChange(e.target.value)} placeholder={placeholder} type={type} className={`glass-effect w-full  rounded-lg outline-none text-[white] relative ${(!adjusted) ? "px-4 text-[16px]" : adjusted} py-4 mt-2`} />
  )
}

export default InputField