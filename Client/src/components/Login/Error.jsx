import React from 'react'
import styles from '../../style'
const Error = (props) =>
(
    <div className={`${styles.flexCenter} font-poppins font-normal h-[40px] text-error`}>
        {props.children}
    </div>
)

export default Error