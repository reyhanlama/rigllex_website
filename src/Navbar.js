import React from "react"
import logo from "./logo.svg"

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-menu">
          <a href="#sample">Samples</a>
          <a href="#music">Music</a>
          <a href="#about">About</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
