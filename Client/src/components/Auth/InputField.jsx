import React from 'react'

const InputField = ({type,placeholder,stateChange}) => {
  return (
    <input onChange={ e => stateChange(e.target.value)} placeholder={placeholder} type={type} className={`glass-effect w-full text-[16px] rounded-lg outline-none text-[white] relative px-4 py-4 mt-2`} />
  )
}

export default InputField