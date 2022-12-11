import { navMenus } from "../../constants"
const Navmenu = () => {
  return (
    <div className="sm:flex hidden bg-[#061227] rounded-full">
      <ul className="flex px-4">
          {
            navMenus.map((navMenu,index)=> (
              <li className="px-6 py-5 text-white cursor-pointer">
                    {navMenu.name}
              </li>
            ))
          }
      </ul>
    </div>
  )
}

export default Navmenu