import {useState,useContext} from 'react'
import { Route,Routes} from 'react-router-dom';
import {Home,Login,Register} from "./components"
import { DataContext } from './context';
import { AnimatePresence } from 'framer-motion';
const App = () => { 
    const [User_session_data, setUser_session_data] = useState([]);
    const {navigate,location} = useContext(DataContext);
    return(
    <AnimatePresence initial={false} >
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={
            (User_session_data?.length  <= 0) ? 
                    <Home navigate={navigate} />
                :
                <div>
                    {navigate("/Dashboard")}
                </div>
                } />
            <Route path='/SignIn' element={ <Login />} />
            <Route path='/SignUp' element={<Register />} />
        </Routes> 
    </AnimatePresence>
    )
}

export default App