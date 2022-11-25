import {useState,useContext} from 'react'
import { DataContext } from '../../../context'
import styles from '../../../style'
import { circle ,circleActive ,angleRight} from '../../../assets'
const Down = ({registeredRoutes,actualLink,setactualLink}) => {
    const nextButton = () => {
        if(actualLink >= 0 && actualLink < registeredRoutes - 1){
            setactualLink(actualLink+1);
        }
    }
  return (
    
    <div className={`${styles.flexCenter} w-full relative h-[60px]`}>
            <div className='flex'>
                    <img className='mr-1' src={circleActive} alt="." />
                    <img className='mr-1' src={actualLink < 1 ? circle : circleActive} alt="." />
                    <img src={actualLink < 2 ? circle : circleActive} alt="." />
            </div>
            <button onClick={nextButton} className={`${styles.flexCenter} w-[125px] py-4 px-8 glass-effect rounded-full outline-none absolute right-0 border-solid border-[#7a7a7a] border-[1px] `}buttontype="button">
                        {actualLink != 2 ? (
                        <div className={styles.flexCenter} >
                            <p className='text-[white] text-[18px] font-poppins font-normal mr-2'>Next</p>
                            <img src={angleRight} alt=">" />
                        </div>
                        )
                        :
                        (<p className='text-[white] text-[18px] font-poppins font-semibold '>Finish</p>)
                        }
                    
            </button>
    </div>
  )
}

export default Down