import React from 'react'
import styles from '../../../../style'
import InputField from '../../InputField'
import {motion as m} from "framer-motion"
const Second = ({states}) => {
  const {setters} = states;
  return (
    <m.div
    initial={{x : "calc(100% + 24px)" }}
    animate={{x : "0%"}}
    transition={{duration : .75,}}
    exit={{x : "-110%"}} 
    className={`${styles.flexStart} flex-col mt-2 absolute top-0 left-0 w-[100%]`}>
        <label className={`${styles.paragraph} mt-4`}>Phone Number*</label>
        <div className='relative'>
          <InputField stateChange={setters.setTelephone} adjusted="px-20 text-[16px] font-poppins font-semibold" placeholder={`XX XXX XX`} />
          <h4 className='absolute top-[calc(50%+3.9px)] translate-y-[-50%] left-4 text-[16px] text-[#ffffffc4] font-poppins font-semibold'>+261</h4>
        </div>
        <label className={`${styles.paragraph} mt-4`}>Contry*</label>
        <InputField stateChange={setters.setCountry} placeholder={`Madagascar`} />
        <div className='flex justify-between'>
              <div className='flex-[1.] flex flex-col'>
                <label className={`${styles.paragraph} mt-4`}>City*</label>
                <InputField stateChange={setters.setCity} placeholder={`Antananarivo`} />
              </div>
              <div className='flex-[0.65] flex flex-col'>
                <label className={`${styles.paragraph} mt-4`}>Zip Code*</label>
                <InputField stateChange={setters.setZipcode} placeholder={``} />
              </div>
        </div>   
    </m.div>  
  )
}

export default Second