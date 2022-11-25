import styles from "../../../style"
import Navbar from "../Navbar"
import Hero from "./Hero"
import {motion as m} from "framer-motion"
const index = () => {
  return (
    <m.div
    initial={{x:"100%"}}
    animate={{x:"0%"}}
    transition={{
        duration: 0.75,
        ease : "easeOut"
    }}
    exit={{opacity : 1}}
    className='absolute left-0 top-0 w-full min-h-[100vh] bg-dark-blue'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>
    </m.div>
  )
}

export default index