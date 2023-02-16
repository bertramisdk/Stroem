import React from 'react'
import Header from './header'
import Nav from './nav'
import Footer from './footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='Layout'>

        <Header />
        <Nav />
        <Outlet />
        <Footer />


    </div>
  )
}

export default Layout