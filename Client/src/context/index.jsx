import  {createContext, CreateContext} from "react" 
import { useNavigate } from "react-router-dom";

export const DataContext  = createContext();

const ContextProvider = (props) => {
    const navigate = useNavigate();
    return (
        <DataContext.Provider value={
            {
                navigate
            }
        }>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextProvider;