import styles from "../../../style"

const Hero = () => {
  return (
    <section className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ${styles.paddingX}`}>
            Register
        </div>
    </section>
  )
}

export default Hero