import {useState,useContext} from 'react'
import { Route,Routes} from 'react-router-dom';
import {Home,Login,Register} from "./components"
import { DataContext } from './context';
const App = () => { 
    const [User_session_data, setUser_session_data] = useState([]);
    const {navigate} = useContext(DataContext);
    return(
    <Routes>
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
    )
}

export default App