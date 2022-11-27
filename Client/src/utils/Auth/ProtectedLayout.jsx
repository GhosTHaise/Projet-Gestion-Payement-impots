import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../context"
import { useEffect } from "react"
const ProtectedLayout = () => {
  const {sessionTKit,navigate} = useContext(DataContext);
  console.log(sessionTKit.user)
  useEffect(()=>{
    if(!sessionTKit.user){
        return navigate("/");
      }
  },[]);

  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedLayout