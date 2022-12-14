import { useState ,useContext} from 'react'
import { DataContext } from '../../../context'
import styles from '../../../style'
import InputField from '../InputField'
import Error from './Error'
import {checkCircle} from "../../../assets"
import { toast } from 'react-toastify'
import axios from "axios"
import {motion as m} from "framer-motion"
import { animation,serveur } from '../../../constants'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailStatus, setEmailStatus] = useState(false);
    const [passwordStatus,setPasswordStatus] = useState(false);
    
    const {navigate,sessionTKit} = useContext(DataContext);


    const checkEmail = () => {
    }
    const checkPassword = () => {
        !(password?.length >= 8) ? 
        setPasswordStatus(true) :
        setPasswordStatus(false)
    }

    const performLogin = async () => {
        checkPassword() && checkEmail();
        //conditinnal post request
        !emailStatus && 
        !passwordStatus && (
            axios.post(`${serveur.url}/loginValidation`,{
                email,
                password
            },{withCredentials : true}).then(({data}) => {
                toast.success(data.message,{
                    draggable : true,
                    className : "bg-primary",
                    autoClose : 1500,
                    theme : "light"
                });
    
                setTimeout(_=> {
                    sessionTKit.login(data.session);
                },1500)
            }).catch(err => {
                toast.error(err.response.data.message,{
                    draggable : true,
                    className : "bg-primary",
                    autoClose : 5000,
                    theme : "light"
                })
            })
        )
        
    }
 return (
    <m.div
    initial={{opacity : 0,y : -100}}
    animate={{opacity : 1,y : 0}}
    transition={{delay : .35,duration : .55,ease : "easeOut"}}
    className='flex flex-col w-full  glass-effect rounded-xl p-6'>
        <div className={`flex flex-1 justify-between items-center`}>
            <h4 className='text-[24px] font-poppins leading-[50px] font-semibold text-[white]'>Login</h4>
        </div>
        <m.div
         initial="hidden"
         animate="show"
         variants={animation.fadeInOut}
         className={`${styles.flexStart} flex-col mt-4`}>
            <label className={`${styles.paragraph}`}>Email</label>
            <InputField stateChange={setEmail} type="text" placeholder="Example@gmail.com"/>
            <Error>
                {(emailStatus) ? "Your Email is not valid." : ""}
            </Error>
            <label className={`${styles.paragraph}`}>Password</label>
            <div className='w-full relative'>
                <InputField stateChange={setPassword} type="password" placeholder=""/>
                <img className={`${password.length >= 8 ? "block" : "hidden"} absolute w-[30px] h-[30px] right-4 top-[50%] translate-y-[-35%]`} src={checkCircle} alt="validate" />
            </div>
            <Error>
                {(passwordStatus) ? "At least 8 characters." : ""}
            </Error>
            <div className='w-full h-[2px] bg-[#707070]  opacity-40 my-4'/>
            <button onClick={performLogin} className='w-full text-[white] glass-effect rounded-full py-5 border-solid border-[#7a7a7a] border-[1px] font-poppins font-normal text-[18px] mt-3'>Sign In</button>
            <div className={`w-full ${styles.flexCenter} mt-4 mb-3`}>
                <p className={`font-poppins text-dimWhite text-[14px] leading-[35px]`}>
                    Don't have an account ? <span className='text-[white] cursor-pointer' onClick={() => navigate("/SignUp")}>Create your account now</span>
                </p>
            </div>
        </m.div>
    </m.div>
  )
 }
export default LoginForm