import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
// import Logout from '../components/Logout';
import SearchInput from '../components/Searchinput';
import { LoginContext } from '../context/logincontext'
import './nav.scss'

const Nav = () => {

  // Hent "user" - for at se om der er logget ind


  const [showMenu, setShowMenu] = useState(false)



  return (
    <nav className='Navbar'>

      {/* Burgermenu */ }
      <div className={showMenu == true ? "burger-button open" : "burger-button"} onClick={() => setShowMenu(!showMenu)}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      <div className={showMenu === true ? "navbar-container active" : "navbar-container"}>
        <ul>
          {/* end tilføjet for at ungå at Home er .aktiv konstant */ }
          <li><NavLink to="/">FORSIDE</NavLink></li>
          <li><NavLink to="omos">OM OS</NavLink></li>
          <li><NavLink to="services">SERVICE</NavLink></li>
          <li><NavLink to="faq">FAQ</NavLink></li>
          <li><NavLink to="nyheder">NYHEDER</NavLink></li>
          <li><NavLink to="kontaktos">KONTAKT OS</NavLink></li>

               </ul>
          <SearchInput/>
      </div>
    </nav>
  )
}

export default Nav