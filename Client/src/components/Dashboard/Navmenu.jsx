import { navMenus } from "../../constants"
import { useState } from "react";
const Navmenu = ({actual_selected}) => {
  const [actualMenu,setActualMenu] = useState(0);
  return (
    <div className="sm:flex hidden bg-[#061227] rounded-full">
      <ul className="flex ">
          {
            navMenus.map((navMenu,index)=> (
              <li onClick={() => setActualMenu(index)} className={`px-8 py-5 text-white cursor-pointer ${index == actualMenu ? "rounded-full bg-[#071C40]" : ""}`}>
                    {navMenu.name}
              </li>
            ))
          }
      </ul>
    </div>
  )
}

export default Navmenu