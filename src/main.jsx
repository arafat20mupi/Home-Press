import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {  ToastContainer} from 'react-toastify';
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router';
import AuthProvider from './Provider/AuthProvider';
import {HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} /> 
        <ToastContainer/>
      </AuthProvider>
    </HelmetProvider>

  </React.StrictMode>,
)
