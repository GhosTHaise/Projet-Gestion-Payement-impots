import  {createContext,useMemo,useState} from "react" 
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
    //Register Info
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");

    const [telephone, setTelephone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //End
    const login = async (data) => {
        setUser(data);
        console.log(user)
        navigate("/Dashboard");
    }

    const logout = async() => {
        setUser(null);
        navigate("/");
    }
    const registeredState = [
        {
            setters : {
                setFirstname,
                setLastname,
                setAddress
            },
            getters : {
                firstname,
                lastname,
                address
            }
        },
        {
            setters : {
                setTelephone,
                setCountry,
                setCity,
                setZipcode
            },
            getters : {
                telephone,
                country,
                city,
                zipcode
            }
        },
        {
            setters : {
                setEmail,
                setPassword,
                setConfirmPassword
            },
            getters : {
                email,
                password,
                confirmPassword
            }
        }
    ]
    const sessionTKit = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    )
    //Dashboard
    const [actualMenu,setActualMenu] = useState(0);
    const navMenuItems = {actualMenu,setActualMenu}
    //end
    return (
        <DataContext.Provider value={
            {
                sessionTKit,
                navigate,
                location,
                fecthDataCall,
                registeredState,
                navMenuItems
            }
        }>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextProvider;