import {useState,useEffect,useContext} from 'react'
import { Route,Routes} from 'react-router-dom';
import {Home,Login,Register,Dashboard} from "./components"
import { DataContext } from './context';
import { AnimatePresence } from 'framer-motion';
import axios from "axios";

const App = () => { 
    const {sessionTKit,fecthDataCall,navigate,location} = useContext(DataContext);
    const [test, settest] = useState([]);
    
    useEffect(()=>{
        const fecthData = async (api) => {
            const [response] =  await fecthDataCall({api : api});
            if(sessionTKit.user != null){
                sessionTKit.logout()
                return navigate("/Dashboard")
            }else{
                sessionTKit.login(response);
            }
            
        }
        fecthData("https://localhost:4430/api/loginSession")
    },[])

    {console.log("Session :",sessionTKit.user);}
    return(
    <AnimatePresence initial={false} >
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home navigate={navigate} />}/>
            <Route path='/Dashboard' element={<Dashboard status={sessionTKit.user?.status} />} />
            <Route path='/SignIn' element={ <Login />} />
            <Route path='/SignUp' element={<Register />} />
        </Routes> 
    </AnimatePresence>
    )
}

export default App