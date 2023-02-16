import React, { useState, useEffect } from 'react'
import './header.scss'
import { getContactInformation } from '../helpers/AdminFetch'
import { ImLocation } from 'react-icons/im';
import { WiTime3 } from 'react-icons/wi'
import { BsTelephoneFill } from 'react-icons/bs'


const Header = () => {


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
    <div className='header-container'>
      <div className='header-content'>

        <img className='header-img' src="/imgs/logo.png" alt='logo' />


        <div className='header-text-container'>
          { kontakt &&

            <div className='text-box'>

            <div className='ht'>   <p className='hl'> <ImLocation /> </p> <p>{ kontakt.address }, { kontakt.zipcity }</p>   </div>

            <div className='ht'>   <p className='hl'> <WiTime3 /> </p> <p>{ kontakt.openinghours }</p>  </div>

            <div className='ht'>   <p className='hl'> <BsTelephoneFill /></p> <p>{ kontakt.phone }</p>  </div>

            </div>



          }
        </div>

      </div>
    </div>
  )
}

export default Header