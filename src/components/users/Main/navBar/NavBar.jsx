import React from 'react'
// import { FaHamburger } from "react-icons/fa";


const NavBar = () => {
  return (
    <div>
        {/* <div>
            <link><FaHamburger/></link>
        </div> */}

        <div>
            <link to="home">Home</link>
        </div>

        <div>
            <link to="addBills">AddBills</link>
        </div>

        <div>
            <link to="illterBills">FillterBills</link>
        </div>

        <div>
            <link to="about">About</link>
        </div>

        
    </div>
  )
}

export default NavBar