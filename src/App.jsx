import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={Route}></RouterProvider>
     </>

  )
}

export default App
