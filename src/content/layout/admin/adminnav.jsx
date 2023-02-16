import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
// import Logout from '../components/Logout';
import './adminnav.scss'

const Adminnav = () => {

  // Hent "user" - for at se om der er logget ind

  const [showMenu, setShowMenu] = useState(false)



  return (
    <nav className='admin-Navbar'>

      {/* Burgermenu */ }
      <div className={showMenu == true ? "burger-button open" : "burger-button"} onClick={() => setShowMenu(!showMenu)}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      <div className={showMenu === true ? "admin-navbar-container active" : "admin-navbar-container"}>
        <ul>
          <li><NavLink to="/">TILBAGE TIL PUBLIC</NavLink></li>
          <li><NavLink to="/admin" end>FORSIDE</NavLink></li>
        <li><NavLink to="nyheder">NYHEDER</NavLink></li>
        <li><NavLink to="nyhederopret">NYHEDER OPRET</NavLink></li>
          <li><NavLink to="adminfaq">NYHEDER</NavLink></li>
        

      
        </ul>
      </div>
    </nav>
  )
}

export default Adminnav