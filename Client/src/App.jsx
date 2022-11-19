import {useState,useContext} from 'react'
import { Route,Routes, useNavigate } from 'react-router-dom';
import {Home,Login} from "./components"
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
        <Route path='/SignIn' element={
                <Login />
        } />
    </Routes> 
    )
}

export default App