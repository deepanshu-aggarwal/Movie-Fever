import React from 'react'
import Logo from "../logo.png"
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className="border flex space-x-8 pl-12 items-center py-4">
      <img className="w-[50px] md:w-[60px]" src={Logo}></img>
      <Link to="/" className="text-blue-400 font-bold text-xl md:text-3xl">Movies</Link>
      <Link to="/favorites" className="text-blue-400 font-bold text-xl md:text-3xl">Favorites</Link>
    </div>
  )
}

export default NavBar;