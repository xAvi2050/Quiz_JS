import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Input from './Components/Input'
import Quiz from './Components/Quiz'
import Result from './Components/Result'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const route = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  },
  {
    path: '/input',
    element: (
      <div>
        <Navbar />
        <Input />
      </div>
    )
  },
  {
    path: '/quiz',
    element: (
      <div>
        <Navbar />
        <Quiz />
      </div>
    )
  },
  {
    path: '/result',
    element: (
      <div>
        <Navbar />
        <Result />
      </div>
    )
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App