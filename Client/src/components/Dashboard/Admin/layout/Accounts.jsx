import styles from "../../../../style"
import { accountsRow } from "../../../../constants"
import {useEffect,useState,use} from "react"
import { serveur } from "../../../../constants";
import axios from "axios";

const Accounts = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    return () => {
        axios.get(`${serveur.url}/user/all`).then(response=> {
            console.log(response.data)
        }).catch(err => {
          console.log("Unable to get user data : "+err)
        })
    };
  }, []);
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
                    <tr className="">
                      <td className="p-3  text-sm  text-gray-700">#1</td>
                      <td className="p-3  text-sm  text-gray-700">Fitiavana</td>
                      <td className="p-3  text-sm  text-gray-700">RANDRIA</td>
                      <td className="p-3  text-sm  text-gray-700">GhosT@gmail.com</td>
                      <td className="p-3  text-sm  text-gray-700">Antananarivo</td>
                      <td className="p-3  text-sm  text-gray-700">ITR 27</td>
                      <td className="p-3  text-sm  text-gray-700">
                        <span className={`p-2 text-xs font-medium uppercase tracking-wider ${true ? "text-green-800 bg-green-200" : ""} rounded-md bg-opacity-50`}>
                          Client
                        </span>
                      </td>
                      <td className="py-2">
                        <div className="flex pr-4">
                          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                            Update
                          </button>
                          <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        <div className="bg-white space-y-3 p-4 rounded-lg shadow-md">
          <div className="flex gap-4 flex-col  items-start  space-x-2 text-sm">
            <div className="flex space-x-2">
                <div>
                  <span className="text-blue-500 font-bold  hover:underline cursor-pointer">
                    #1
                  </span>
                </div>
                <div className="text-gray-600">
                  Fitiavana
                </div >
                <div className="text-gray-500">
                  RANDRIA
                </div>
                <div>
                  <span className={`p-2 text-xs font-medium uppercase tracking-wider ${true ? "text-green-800 bg-green-200" : ""} rounded-md bg-opacity-50`}>
                    Client
                  </span>
                </div>
            </div>
            <div className="text-sm text-gray-500">
              Ghostrex2@gmail.com
            </div>
            <div className="text-sm text-gray-700">
              Anatananarivo , ITR 27
            </div>
            <div className="flex pr-4">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                Update
              </button>
              <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Accounts