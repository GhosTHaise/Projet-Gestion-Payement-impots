import React from 'react'
import styles from './style'
import LoginForm from './components/LoginForm'
const App = () => (
    <div className={`${styles.paddingX} h-[100vh] ${styles.paddingY} bg-primary`}>
            <LoginForm />
    </div>
)

export default App