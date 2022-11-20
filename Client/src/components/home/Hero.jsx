import styles from "../../style"
import GetStarted from "./GetStarted"
import {robot,discount} from "../../assets"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row items-center py-[6px] px-4 glass-effect z-[1] rounded-[10px] mb-2">
                  <img src={discount} alt="..." className="w-[32px] h-[32px]" />
                  <p className={`${styles.paragraph} ml-2 mr-2`}>
                        <span className="text-white">20%</span> Discount for {" "}
                        <span className="text-white">1 Mounth</span> Account
                  </p>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                      The Next <br className="sm:hidden block" />{" "}<span className="text2-gradient">Generation</span>
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                      <Link to="SignIn">
                        <GetStarted />
                      </Link>
                    </div>
              </div> 
              <h1 className="font-poppins font-semibold text-white ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
                  Payment Method.
              </h1>
              <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
                  Our teams of experts uses a methodology to identify 
                  and secure all your payments 
                  most likely to fit all you need.
                  We examine and accept all way of payment.
              </p>
        </div>
        <div className={`${styles.flexCenter} flex-[.75] flex md:my-0 my-10 relative`}>
          <img className="h-[100%]  w-[100%] relative z-[5]" src={robot} alt="billing" />
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
          <div className='absolute z-[1] w-[80%] h-[85%] bottom-40 white__gradient'></div>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
        </div>
        <div className={` ss:hidden ${styles.flexCenter}`}>
          <Link to="SignIn" >
            <GetStarted />
          </Link>
        </div>
    </section>
  )
}

export default Hero