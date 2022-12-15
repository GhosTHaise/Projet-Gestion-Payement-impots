import SideBar from "../SideBar"
import { DataContext } from "../../../context"
import { useContext } from "react"
import {Accounts,Taxes,Hero} from "./layout"
const index = () => {
  const {navMenuItems} = useContext(DataContext);
  const renderSwitch = (param) => {
    switch(param){
      case 0:
        return <Hero />
        break;
      case 1 :
        return <Accounts />
        break;
      case 2 :
        return <Taxes />
        break;
    }
  }
  return (
    <div>
        {
          renderSwitch(navMenuItems.actualMenu)
        }
    </div>
  )
}

export default index