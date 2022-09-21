import React from 'react'
import bars from '../imgs/menu.svg'
const Navbar = () => {
  return (
    <nav>
        <a id="logo"className="navbar-img"href="/">Christina</a>
        <img id="menu"className = "navbar-img"src={bars} alt="menu"/>
    </nav>
  )
}

export default Navbar