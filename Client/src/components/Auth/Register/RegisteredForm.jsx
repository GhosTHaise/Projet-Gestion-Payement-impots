import {useState,useContext} from 'react'
import Down from "./Down"
import { DataContext } from '../../../context'
import { registeredRoutes,serveur } from '../../../constants'
import { AnimatePresence,motion as m } from 'framer-motion'
import { toast } from 'react-toastify'
import axios from 'axios'
const RegisteredForm = () => {
  const [actualLink, setactualLink] = useState(0);
  const {registeredState,navigate} = useContext(DataContext);

  const registerButton = () => {
      let [first,second,third] = registeredState;
      axios.post(`${serveur.url}/registered`,
        {
          ...first.getters,
          ...second.getters,
          ...third.getters
        }
      ).then((response)=> {
            
            Object.entries({...first.setters,...second.setters,...third.setters}).forEach(entry => {
                entry[1]("");
            })
            
            toast.success(response.data.message,{
            draggable : true,
            className : "bg-primary",
            autoClose : 1500,
            theme : "light"
        });
        setTimeout(() => {
            navigate("/SignIn");
        },1500);
      }).catch(err=>{
        console.log(err);
          toast.error(err.response.data.message);
      })
  }

  return (
    <m.div 
    initial={{opacity: 0,x : 100}}
    animate={{opacity : 1,x : 0}}
    transition={{duration : .75,delay : .30}}
    className="flex flex-col w-full  glass-effect rounded-xl p-6 overflow-hidden">
            <h4 className='text-[24px] font-poppins leading-[50px] font-semibold text-[white]'>Create Your Account</h4>
              <div className='relative h-[333px]'>
                    <AnimatePresence initial={false} >
                      
                        {registeredRoutes.map((registeredRoute,index)=> (
                          (index) == actualLink && <registeredRoute.element  states={registeredState[index]} key={registeredRoute.id} />
                        ))}
                
                    </AnimatePresence>
                </div>      
            <div className='w-full h-[2px] bg-[#707070]  opacity-75 my-6'/>
            <Down registerButton={registerButton} registeredRoutes={registeredRoutes.length} setactualLink={setactualLink} actualLink={actualLink} />
    </m.div>
  )
}

export default RegisteredForm