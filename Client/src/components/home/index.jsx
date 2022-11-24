import Navbar from "./Navbar"
import Hero from "./Hero"
import Stats from "./Stats"
import styles from '../../style'
import {motion as m} from "framer-motion"
import {animation} from "../../constants"
//Home
const index = () => (
    <m.div
    initial={{x : "-100%"}}
    animate={{x : "0%"}}
    transition={{duration : 0.75,ease:"easeOut"}}
    exit={{opacity : 1}}
    variants={animation.sladeInOut}
    className={`absolute top-0 w-full min-h-[100vh] overflow-hidden bg-primary`}>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Hero />
                    </div>
                </div>
                <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        {/* all section composant */}
                        <Stats />
                    </div>
                </div>
    </m.div>
  )


export default index