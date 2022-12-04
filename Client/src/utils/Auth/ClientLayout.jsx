import {Fragment, useContext} from 'react'
import { DataContext } from '../../context'
const ClientLayout = ({children}) => {
    const {sessionTKit} = useContext(DataContext);
    if(sessionTKit.user?.status == "Client"){
        return (
            <Fragment>
                ClientLayout
            </Fragment>
          )
    }
  
}

export default ClientLayout