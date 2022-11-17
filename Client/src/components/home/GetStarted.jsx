import styles from "../../style"
import { arrowUp } from "../../assets"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter}  h-[140px] w-[140px] rounded-full p-[2px] bg-orange-gradient cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                        <span className="text2-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrowUp" className="h-[23px] w-[23px] object-contain" />
                </div>
                <p className="font-poppins font-medium text[18px] leading-[23px]">
                    <span className="text2-gradient">Started</span>
                </p>
        </div>
    </div>
  )
}

export default GetStarted