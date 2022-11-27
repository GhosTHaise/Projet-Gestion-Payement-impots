import styles from "../../style"
import Client from "./Client"
import Admin from "./Admin"
import Navbar from "./Navbar"
import {motion as m } from "framer-motion"
//Dashboard
const Index = () => {
  return (
    <m.div className="w-full min-h-[100vh] overflow-hidden bg-dark-blue">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                  <Navbar />
              </div>
        </div>
    </m.div>
    
  )
}

export default Index