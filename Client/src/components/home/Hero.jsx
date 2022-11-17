import styles from "../../style"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section id='home' className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                  <img src="" alt="..." className="w-[32px] h-[32px]" />
                  <p className={`${styles.paragraph} ml-2 mr-2`}>
                        <span className="text-white">20%</span> Discount for {" "}
                        <span className="text-white">1 Mounth</span> Account
                  </p>
              </div>
              <div className="flex flex-row justify-between items-end center w-full">
                    <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                      The Next <br className="sm:hidden block" />{" "}<span className="text2-gradient">Generation</span>
                    </h1>
                    <div className="md:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
              </div>  
        </div>
        <div className={``}></div>
    </section>
  )
}

export default Hero