import Modal from 'react-modal';
import axios from "axios"
import { useState } from 'react';
import { serveur } from "../../../constants";
import {toast} from "react-toastify"
const ModalView = ({isOpen,user_id,setIsOpen}) => {
    const [Userdata, setUserdata] = useState({});
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius : "10px",
        },
      };
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
        axios.get(`${serveur.url}/user/${user_id}`).then(response=>{
            setUserdata(response.data)
        })
      } 
    
      function closeModal() {
        setIsOpen(false);
      }
      const updateField = (field,value) => {
         setUserdata( current => {
            let obj = {};
            obj[field] = value;
            
            return {
                ...current,
                ...obj
            }
         })
      }

      const updateAtion = () => {
          const {_id,__v,...requestData} = Userdata;
          axios.put(`${serveur.url}/user/${_id}`,{
              ...requestData
          }).then( response => {
            afterOpenModal();
              if(!response?.type){
                toast.success(response.data?.message, {
                  draggable: true,
                  className: "bg-primary",
                  autoClose: 1500,
                  theme: "light"
                });
                closeModal();
              }else{
                toast.error(response.data?.message, {
                  draggable: true,
                  className: "bg-primary",
                  autoClose: 1500,
                  theme: "light"
                })
              }
          })
      }
  return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* from */}
            <div className='grid grid-cols-1 min-w-[470px]'>
                {Object.entries(Userdata).map((data,index)=>(
                    !(["_id","__v","impots","habilitations"].includes(data[0]))  &&   
                    <div key={index} className='flex justify-between py-2'>
                          <p className="text-[16px] text-gray-600 font-poppins font-semibold py-2">{data[0]}</p>
                          <input onChange={(e)=>updateField(data[0],e.target.value)} className='px-2 py-2' type="text" name={data[0]} defaultValue={data[1]} />
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-end py-4'>
                <button onClick={()=> closeModal()} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mr-2">
                        Cancel
                </button>
                <button onClick={()=>updateAtion()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Confirm
                </button>
            </div>
      </Modal>
  )
}

export default ModalView