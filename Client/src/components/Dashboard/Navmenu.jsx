import { navMenus } from "../../constants"
import { useState ,useContext} from "react";
import { DataContext } from "../../context";
const Navmenu = ({actual_selected}) => {
  const {navMenuItems} = useContext(DataContext);
  return (
    <div className="md:flex hidden bg-[#061227] rounded-full">
      <ul className="flex ">
          {
            navMenus.map((navMenu,index)=> (
              <li key={navMenu.id} onClick={() => navMenuItems.setActualMenu(index)} className={`px-8 py-5 text-white cursor-pointer ${index == navMenuItems.actualMenu ? "rounded-full bg-[#071C40]" : ""}`}>
                    {navMenu.name}
              </li>
            ))
          }
      </ul>
    </div>
  )
}

export default Navmenu