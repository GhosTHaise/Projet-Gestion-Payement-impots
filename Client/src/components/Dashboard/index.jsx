import styles from "../../style"
import Client from "./Client"
import Admin from "./Admin"
import Navbar from "./Navbar"
import {motion as m } from "framer-motion"
import AdminLayout from "../../utils/Auth/AdminLayout"
//Dashboard
const Index = () => {
  return (
    <m.div className="w-full min-h-[100vh] overflow-hidden bg-dark-blue">
          <div className={`${styles.paddingX} flex-col ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                  <Navbar />
              </div>
              <div className={`${styles.boxWidth} `}>
                    <AdminLayout>
                            <h1 className="">
                              espace Admin
                            </h1>
                    </AdminLayout>
              </div>
        </div>
    </m.div>
    
  )
}

export default Index