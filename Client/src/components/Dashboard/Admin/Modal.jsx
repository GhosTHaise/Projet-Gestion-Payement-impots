import Modal from 'react-modal';
import axios from "axios"
import { useState } from 'react';
import { serveur } from "../../../constants";
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
  return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* from */}
        <div className='flex md:flex-row flex-col'>
              
        </div>
      </Modal>
  )
}

export default ModalView