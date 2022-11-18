import styles from "../../style"
import { stats } from "../../constants"
const Stats = () => 
(
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {
                stats.map((stat,value) => (
                    <div key={stat.id} className={`flex-1  flex font-poppins justify-start items-center sm:flex-row flex-col m-3`}>
                            <h4 className="text-left font-semibold xs-text-[40px] text-[30px] xs-leading-[53px] leading-[43px] text-white">{stat.value}</h4>
                            <p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text2-gradient uppercase ml-3">{stat.title}</p>
                    </div>
                ))
            }
    </section>
)


export default Stats