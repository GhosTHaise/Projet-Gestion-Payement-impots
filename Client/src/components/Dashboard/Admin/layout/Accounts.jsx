import styles from "../../../../style"
import { accountsRow } from "../../../../constants"
import {useEffect,useState,use} from "react"
import { serveur } from "../../../../constants";
import axios from "axios";
import {toast} from "react-toastify"
import ModalView from "../Modal";
const Accounts = () => {
  const [Users, setUsers] = useState([]);
  const [User_id, setUser_id] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const fecthUserData = () => {
        axios.get(`${serveur.url}/user/all`).then(response=> {
          setUsers(response.data);
      }).catch(err => {
        console.log("Unable to get user data : "+err)
      })
  }
  useEffect(() => {
    return () => {
        fecthUserData();
    };
  }, []);

  const deleteUser = async (_id) => {
    axios.delete(`${serveur.url}/user/${_id}`).then(response => {
      if (!response.data.type) {
            toast.success(response.data?.message, {
              draggable: true,
              className: "bg-primary",
              autoClose: 1500,
              theme: "light"
            })
            fecthUserData();
          }else{
            toast.error(response.data?.message,{
              draggable : true,
              className : "bg-primary",
              autoClose : 1500,
              theme : "light"
          });
          }
      }).catch(err => {
        console.log("Erreur : " + err);
      })
  }
  return (
    <div className={`${styles.paddingY}`}>
          <div className={` w-full rounded-lg shadow hidden md:block overflow-auto`}>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      {
                        accountsRow.map((accountRow, index) => (
                          <th key={accountRow.id} className="text-[16px] p-3 text-sm font-poppins fonr-semibold text-left">
                            {accountRow.row}
                          </th>
                        ))
                      }
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 whitespace-nowrap">
                    {Users.map((user,index )=> (
                      <tr key={index} className="">
                      <td className="p-3  text-sm cursor-pointer text-blue-600 hover:underline">#{`${user._id.substring(0,4)}...${user._id.slice(-3)}`}</td>
                      <td className="p-3  text-sm  text-gray-700">{user.firstname}</td>
                      <td className="p-3  text-sm  text-gray-700">{user.lastname}</td>
                      <td className="p-3  text-sm  text-gray-700">{user.email}</td>
                      <td className="p-3  text-sm  text-gray-700">{user.city}</td>
                      <td className="p-3  text-sm  text-gray-700">{user.address}</td>
                      <td className="p-3  text-sm  text-gray-700">
                        <span className={`p-2 text-xs font-medium uppercase tracking-wider ${user.status == "Admin" ? "text-green-800 bg-green-200" : ""} rounded-md bg-opacity-50`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-2">
                        <div className="flex pr-4">
                          <button onClick={()=> {setUser_id(user._id);setIsOpen(true)}} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                            Update
                          </button>
                          <button onClick={()=> deleteUser(user._id)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
          </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
            {Users.map((user,index)=> (
              <div className="bg-white space-y-3 p-4 rounded-lg shadow-xl">
              <div className="flex gap-4 flex-col  items-start  space-x-2 text-sm">
                <div className="flex space-x-2">
                    <div>
                      <span className="text-blue-500 font-bold  hover:underline cursor-pointer">
                        #{user._id} | 
                      </span>
                    </div>
                    <div className="text-gray-600">
                      {user.firstname}
                    </div >
                    <div className="text-gray-500">
                      {user.lastname}
                    </div>
                    <div>
                      <span className={`p-2 text-xs font-medium uppercase tracking-wider ${true ? "text-green-800 bg-green-200" : ""} rounded-md bg-opacity-50`}>
                        {user.status}
                      </span>
                    </div>
                </div>
                <div className="text-sm text-gray-500">
                  {user.email}
                </div>
                <div className="text-sm text-gray-700">
                  {user.city} , {user.address}
                </div>
                <div className="flex pr-4">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Update
                  </button>
                  <button onClick={()=> deleteUser(user._id)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            ))}
      </div>

      <ModalView isOpen={modalIsOpen} setIsOpen={setIsOpen} user_id={User_id} />
    </div>
    
  )
}

export default Accounts