import styles from "../../style"
import Client from "./Client"
import Admin from "./Admin"
import Navbar from "./Navbar"

//Dashboard
const Index = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
        </div>
    </div>
  )
}

export default Index