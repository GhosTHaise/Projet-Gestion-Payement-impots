import { useContext } from "react"
import { DataContext } from "../../context"
const AdminLayout = ({children}) => {
    const {sessionTKit} = useContext(DataContext);
    if(sessionTKit.user.status == "Admin"){
        return(
            <div>
                {children}
            </div>
        )
    }
}

export default AdminLayout