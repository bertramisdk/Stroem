import React from 'react'
import Adminnav from './adminnav'
import {Outlet} from 'react-router-dom'
import './adminlayout.scss'

const Adminlayout = () => {
  return (
    <div className='AdminLayout'>
   

    <div className='admin-container'>
      <Adminnav />

      <Outlet />
    </div>

  </div>
  )
}

export default Adminlayout