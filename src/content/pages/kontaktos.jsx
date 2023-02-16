import React, { useState, useEffect } from 'react'
import { getContactInformation } from '../helpers/AdminFetch'
import parser from 'html-react-parser';
import './kontaktos.scss'
import { ImLocation } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Kontaktheader from '../components/kontaktheader';
import Kontaktmap from '../components/kontakt-map';
import Kontaktform from '../components/kontakt-form';

const Kontaktos = () => {

  return (
    <div>
        <div className="breadcrumbs-main-container">
        <div className='breadcrumbs-container'>
          <h2>Kontakt os</h2>
          <div className='breadcrumb'>
            <a href='/'>Forside</a>/<p>Kontakt os</p>
          </div>
        </div>
      </div>

      <Kontaktheader/>

<div className='kontakt-container'>
<div className='content-contianer'>
     <Kontaktform/>
     <Kontaktmap/>

</div>
</div>


    </div>
  )
}

export default Kontaktos