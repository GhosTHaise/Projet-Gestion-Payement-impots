import React from 'react'
import styles from '../../style'
const Error = (props) =>
(
    <div className={`${styles.flexCenter} text-[14px] font-poppins font-normal h-[30px] text-error`}>
        {props.children}
    </div>
)

export default Error