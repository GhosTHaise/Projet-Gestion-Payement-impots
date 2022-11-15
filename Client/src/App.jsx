import {useState} from 'react'
import {Navbar} from "./components"
import styles from './style'
const App = () => { 
    const [User_session_data, setUser_session_data] = useState([]);
    return(
    <div className={`${styles.paddingX} w-full h-[100vh] bg-primary`}>
        <Navbar />
    </div>
    )
}

export default App