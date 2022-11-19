import React from 'react'
import styles from '../../style'
import Navbar from './Navbar'
import Hero from "./Hero"
//Login
const index = () => {
  return (
    <div className='w-full min-h-[100vh] overflow-hidden bg-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                       <Navbar />
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>
    </div>
  )
}

export default index