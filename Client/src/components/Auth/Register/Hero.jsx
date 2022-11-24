import styles,{layout} from "../../../style"
import {bill} from "../../../assets"
import RegisteredForm from "./RegisteredForm"
const Hero = () => {
  return (
    <section className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
        <div className={`${layout.sectionImg}`}>
              <img src={bill} alt="billing" />
        </div>
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 ${styles.paddingX}`}>
              <div className="w-[470px]">
                    <RegisteredForm />
              </div>
        </div>
    </section>
  )
}

export default Hero