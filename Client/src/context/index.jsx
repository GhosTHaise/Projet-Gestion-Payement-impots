import  {createContext,useMemo} from "react" 
import { useLocation, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../utils/useLocalStorage";
import axios from "axios";

export const DataContext  = createContext();

const fecthDataCall = async({api}) => {
    let apireturn = await axios.get(api,{withCredentials : true}).then( 
        async (response )=>{
            return response.data;
    }).catch(err => {
        console.log(`Unable to fetch : ${api} | ${err}`);
        return new Array(err.response.data);
    })
    return apireturn;
}

const ContextProvider = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user,setUser] = useLocalStorage("user",null);

    const login = async (data) => {
        setUser(data);
    }

    const logout = async() => {
        setUser(null);
        navigate("/");
    }

    const sessionTKit = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    )
    
    return (
        <DataContext.Provider value={
            {
                sessionTKit,
                navigate,
                location,
                fecthDataCall
            }
        }>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextProvider;