import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';
import Todos from './components/Todos/Todos';

const rouer=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
    {
      path:'/about',
      loader:()=>fetch('FakeData.json'),
      element:<About></About>
    }, 
    {
      path:'/todo',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/todos'),
      element:<Todos></Todos>
    },
    {
      path:'/blog',
      element:<Blog></Blog>,
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
      path:'/blog/:id',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      element:<Details></Details>
    },
    {
      path:'/contact',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Contact></Contact>
    },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rouer}></RouterProvider>
  </StrictMode>,
)
