import SideBar from "../SideBar"
import { DataContext } from "../../../context"
import { useContext } from "react"
const index = () => {
  const {navMenuItems} = useContext(DataContext);
  return (
    <div>

    </div>
  )
}

export default index