import React from 'react'
import NavBar from './navBar/NavBar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Main