import React, { useState, useEffect } from 'react'
import { getContactInformation } from '../helpers/AdminFetch'
import parser from 'html-react-parser';
import './kontaktos.scss'
import { ImLocation } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Kontaktheader from '../components/kontaktheader';

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

      <div className='kontakt-info-container'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.6429969238475!2d10.881308278752082!3d56.423138912002294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464dd598f8cde4ad%3A0xd8fd2fc8330c4df9!2s%C3%85strupparken%201%2C%208500%20Gren%C3%A5!5e0!3m2!1sda!2sdk!4v1668176377933!5m2!1sda!2sdk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>



    </div>
  )
}

export default Kontaktos