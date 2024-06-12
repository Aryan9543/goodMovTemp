import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './component/AboutUs.jsx';
import Services from './component/Services.jsx';
import Banner from './component/Banner.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Banner/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/service",
        element:<Services/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
