import Navbar from "./Navbar"
import Hero from "./Hero"
import Stats from "./Stats"
import styles from '../../style'
//Home
const index = ({navigate}) => (
    <div className={` w-full min-h-[100vh] overflow-hidden bg-primary`}>
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
            </div>
  )


export default index