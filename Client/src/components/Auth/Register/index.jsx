import styles from "../../../style"
import Navbar from "../Navbar"
import Hero from "./Hero"

const index = () => {
  return (
    <div className='w-full min-h-[100vh] overflow-hidden bg-dark-blue'>
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
    </div>
  )
}

export default index