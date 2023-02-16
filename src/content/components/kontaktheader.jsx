import React, { useState, useEffect } from 'react'
import { getContactInformation } from '../helpers/AdminFetch'
import parser from 'html-react-parser';
import './kontaktheader.scss'
import { ImLocation } from 'react-icons/im';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const Kontaktheader = () => {


    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ kontakt, setKontakt ] = useState();
  
    useEffect( () => {
      setLoading( true )
      getContactInformation()
        .then( ( response ) => {
          setKontakt( response.data )
          setError( false )
        } )
        .catch( ( err ) => {
          setError( true )
          setKontakt()
        } )
        .finally( () => {
          setLoading( false )
        } )
    }, [] )



  return (
    <div className="top-card-container">
        <div className='card-container'>
        <div className="top-card">
          <h2><span><ImLocation/></span>Adresse</h2>
          { kontakt &&
            <p>{kontakt.address + ", " + kontakt.zipcity}</p>
          }
        </div>
        <div className="top-card-l">
          <h2><span><BsTelephoneFill/></span>Telefon</h2>
          { kontakt &&
            <p>{kontakt.phone}</p>
          }
        </div>
        <div className="top-card-l">  
          <h2><span><GrMail/></span>Email</h2>
          { kontakt &&
            <p>{kontakt.email}</p>
          }
        </div>
        </div>
      </div>
  )
}

export default Kontaktheader