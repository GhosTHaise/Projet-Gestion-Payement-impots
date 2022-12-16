import styles from "../../../../style"
import { motion } from "framer-motion"
import { animation } from "../../../../constants"
import {impots} from "../../../../assets"
import { useContext } from "react"
import { DataContext } from "../../../../context"
const Hero = () => {
  const {navMenuItems} = useContext(DataContext);
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              variants={animation.slideTopBotom}
              className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-[#061227] flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                      Welcome <br className="sm:hidden block" />{" "}<span className="text-gradient">Back</span>
                    </h1>
              </motion.div> 
              <h1 className="font-poppins font-semibold text-[#061227] ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
                  Dear User .
              </h1>
              <motion.p
              initial="hidden"
              animate="show"
              variants={animation.fadeInOut}
              className={`font-poppins font-normal text-[#061227] text-[17px] leading-[30.8px] max-w-[470px] mt-4`}>
                  We love to form a team, work with enthusiastic, 
                  creative people, and have a great learning attitude. 
                  And hear that you fit the bill perfectly. 
                  It's great to have you with us. Warmest welcome!
              </motion.p>
              <motion.button
              initial="hidden"
              animate="show"
              variants={animation.fadeInOut}
              type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-md mt-12`}
              onClick={()=> navMenuItems.setActualMenu(2)}
              >
                  Start to task
              </motion.button>
        </div>
        <div className={`${styles.flexCenter} flex-[.75] flex md:my-0 my-10 relative`}>
          <img className="h-[100%]  w-[100%] relative z-[5]" src={impots} alt="taxes" />
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
          <div className='absolute z-[1] w-[80%] h-[85%] bottom-40 white__gradient'></div>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
        </div>
    </section>
  )
}

export default Hero