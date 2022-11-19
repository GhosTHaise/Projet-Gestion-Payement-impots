import styles from '../../style'
import InputField from './InputField'
import Error from './Error'
const LoginForm = () =>
 (
    <div className='flex flex-col w-full  glass-effect rounded-lg p-6'>
        <div className={`flex flex-1 justify-between items-center`}>
            <h4 className='text-[22px] font-poppins leading-[50px] font-semibold text-[white]'>Login</h4>
        </div>
        <div className={`${styles.flexStart} flex-col mt-4`}>
            <label className={`${styles.paragraph}`}>Email</label>
            <InputField type="text" placeholder="Example@gmail.com"/>
            <Error>
                Your Email is not valid.
            </Error>
            <label className={`${styles.paragraph}`}>Password</label>
            <InputField type="password" placeholder=""/>
            <Error>
                At least 8 characters.
            </Error>
        </div>
    </div>
  )

export default LoginForm