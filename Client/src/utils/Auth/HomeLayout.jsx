import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../context"
import { useEffect } from "react"
const HomeLayout = () => {
    const {sessionTKit,navigate} = useContext(DataContext);
    
    useEffect(()=>{
        if(sessionTKit.user){
            return navigate("/Dashboard");
        }
    },[])

    return (
    <div>
        <Outlet />
    </div>
  )
}

export default HomeLayout