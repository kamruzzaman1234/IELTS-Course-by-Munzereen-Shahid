import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './LayOut/Main.jsx';
import Home from './Pages/Home/Home.jsx';


const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  className="bg-white" router={router}/>
  </StrictMode>,
)
