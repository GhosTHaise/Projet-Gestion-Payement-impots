import React from 'react'
import styles from '../../../../style'
import InputField from '../../InputField'
import {motion as m} from "framer-motion"
const Second = () => {
  return (
    <m.div
    initial={{x : "calc(100% + 24px)" }}
    animate={{x : "0%"}}
    transition={{duration : .75,}}
    exit={{x : "-110%"}} 
    className={`${styles.flexStart} flex-col mt-2 absolute top-0 left-0 w-[100%]`}>
        <label className={`${styles.paragraph} mt-4`}>Email*</label>
        <InputField placeholder={`Exemple@gmail.com`} />
        <label className={`${styles.paragraph} mt-4`}>Password*</label>
        <InputField placeholder={``} />
        <label className={`${styles.paragraph} mt-4`}>Confirm Password*</label>
        <InputField placeholder={``} />
    </m.div>  
  )
}

export default Second