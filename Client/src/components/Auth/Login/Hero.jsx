import React from 'react'
import styles ,{layout} from '../../../style'
import LoginForm from './LoginForm'
import { card } from '../../../assets'
import {motion as m} from "framer-motion"
import {animation} from "../../../constants"

const Hero = () => {
  return (
    <section className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className={`${styles.flexStart} flex-col`}>
                    <h1 className='font-poppins font-semibold text-white ss:text-[52px] text-[42px] ss:leading-[75px] leading-[50px]'>
                        Welcome
                    </h1>
                    <m.p
                    initial="hidden"
                    animate="show"
                    variants={animation.fadeInOut}
                    className={`max-w-[470px] mt-4 ${styles.paragraph}`}>
                        We use hashcrypt to provide the efficiency of the computation
                        and offer to you maximum of security.<br />
                        Your Identy will be in confidential.
                    </m.p>
                </div>
                <div className='w-[475px] mt-10'>
                    <LoginForm />
                </div>
        </div>
        <div className={`${layout.sectionImgReverse} flex-1.5 pt-16`}>
              <img className='w-[90%] h-[90%] object-contain' src={card} alt="Card"/>
        </div>
        
    </section>
  )
}

export default Hero