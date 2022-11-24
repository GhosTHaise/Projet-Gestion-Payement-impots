import InputField from "../../InputField"
import styles from "../../../../style"
const First = () => {
  return (
    <div className={`${styles.flexStart} flex-col mt-2`}>
        <label className={`${styles.paragraph} mt-4`}>First name*</label>
        <InputField placeholder={`RANDRIAMBOLOLOMANANA`} />
        <label className={`${styles.paragraph} mt-4`}>Last name*</label>
        <InputField placeholder={`Fitiavana Sambatra`} />
        <label className={`${styles.paragraph} mt-4`}>Address*</label>
        <InputField placeholder={`ITR 27`} />
    </div>
  )
}

export default First