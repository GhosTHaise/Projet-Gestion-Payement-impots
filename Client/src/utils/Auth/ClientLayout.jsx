import {Fragment, useContext} from 'react'
import { DataContext } from '../../context'
const ClientLayout = ({children}) => {
    const {sessionTKit} = useContext(DataContext);
    if(sessionTKit.user?.status == "Client"){
        return (
            <Fragment>
                {children}
            </Fragment>
          )
    }
  
}

export default ClientLayout