import styles,{layout} from "../../style"
import {animated} from "../../assets"
const About = () => {
  return (
    <section id="e-tax" className={`${layout.sectionReverse}`}>
        <div className={layout.sectionImgReverse}>
        <img src={animated} alt="billing" classname="w-[100%] h-[100%] relative z-[5]" />
            <div className="absolute z-[3] -left-1/2 top-0 h-[50%] w-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] -left-1/2 bottom-0 h-[50%] w-[50%] rounded-full pink__gradient" />
        </div>
        <div className={layout.sectionInfo}>
            <p className={` border-l-2 border-dimWhite font-poppins font-normal text-dimWhite text-[14px] leading-[17px] px-2 mb-3`}>What is E-Tax ?</p>
            <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Unde, quidem vel. Sit dignissimos optio voluptates, 
              sed perspiciatis sunt tenetur possimus.
            </p>
        </div>    
    </section>
  )
}

export default About