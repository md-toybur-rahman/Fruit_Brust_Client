import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Route.jsx';
// import App from './App.jsx'
import './index.css'
import AuthProvider from './Components/Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
)
