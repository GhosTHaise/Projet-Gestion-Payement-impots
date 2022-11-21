import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import {BrowserRouter} from "react-router-dom"
import ContextProvider from './context'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <ContextProvider>
        <App />
        <ToastContainer className={'w-[auto]'} />
      </ContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
)
