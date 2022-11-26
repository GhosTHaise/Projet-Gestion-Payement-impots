import InputField from "../../InputField"
import styles from "../../../../style"
import {motion as m} from "framer-motion"
const First = ({states}) => {
  return (
    <m.div 
    initial={{x : "calc(100% + 24px)" }}
    animate={{x : "0%"}}
    transition={{duration : .75}}
    exit={{x : "-110%"}} 
    
    className={`${styles.flexStart} flex-col mt-2 absolute top-0 left-0 w-[100%]`}>
        <label className={`${styles.paragraph} mt-4`}>First name*</label>
        <InputField stateChange={states.setters.setFirstname} placeholder={`RANDRIAMBOLOLOMANANA`} />
        <label className={`${styles.paragraph} mt-4`}>Last name*</label>
        <InputField stateChange={states.setters.setLastname} placeholder={`Fitiavana Sambatra`} />
        <label className={`${styles.paragraph} mt-4`}>Address*</label>
        <InputField stateChange={states.setters.setAddress} placeholder={`ITR 27`} />
    </m.div>
  )
}

export default First