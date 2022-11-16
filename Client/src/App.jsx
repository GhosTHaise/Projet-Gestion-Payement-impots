import {useState} from 'react'
import {Navbar,Hero} from "./components"
import styles from './style'
const App = () => { 
    const [User_session_data, setUser_session_data] = useState([]);
    return(
   (User_session_data?.length  <= 0) ? 
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
            </div>
        </div>
    </div>
    :
    <div>

    </div>
    )
}

export default App