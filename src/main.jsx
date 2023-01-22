import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//Configurando Router 
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import ErrorPage from './routes/ErrorPage'
import Home from "./routes/Home"
import Contact from './routes/Contact'
import ContactDetail from './routes/ContactDetail'
import { Children } from 'react'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"/contact/:id",
        element: <ContactDetail />
      },
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
