import  {createContext, CreateContext} from "react" 
import { useLocation, useNavigate } from "react-router-dom";

export const DataContext  = createContext();

const ContextProvider = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <DataContext.Provider value={
            {
                navigate,
                location
            }
        }>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextProvider;