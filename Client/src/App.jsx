import {useState,useEffect,useContext} from 'react'
import { Route,Routes} from 'react-router-dom';
import {Home,Login,Register,Dashboard} from "./components"
import { DataContext } from './context';
import { AnimatePresence } from 'framer-motion';
import { ProtectedLayout,HomeLayout } from './utils/Auth';
import { serveur } from './constants';
const App = () => { 
    const {sessionTKit,fecthDataCall,navigate,location} = useContext(DataContext);
    const [test, settest] = useState([]);
    
    useEffect(()=>{
        const fecthData = async (api) => {
            const [response] =  await fecthDataCall({api : api});
            /* if(sessionTKit.user != null){
                return navigate("/Dashboard")
            }else{
                
            } */
            if(response.message){
                return ;
            }
            sessionTKit.login(response);
        }
        fecthData(`${serveur.url}/loginSession`)
    },[])

    //{console.log("Session :",sessionTKit.user);}
    return(
    <AnimatePresence initial={false} >
        <Routes location={location} key={location.pathname}>
            {/* Not Logged */}
            <Route element={<HomeLayout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/SignIn' element={ <Login />} />
                <Route path='/SignUp/*' element={<Register />} />
            </Route>
                    
            {/* Logged */}
            <Route element={<ProtectedLayout/>}>
                <Route path='/Dashboard' element={<Dashboard status={sessionTKit.user?.status} />} />
            </Route>
        </Routes> 
    </AnimatePresence>
    )
}

export default App