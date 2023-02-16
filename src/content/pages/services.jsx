import React, { useState, useEffect } from 'react'
import { getService } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './services.scss'

const Services = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ service, setService ] = useState();

  useEffect( () => {
    setLoading( true )
    getService()
      .then( ( response ) => {
        setService( response.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setService()
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )


  return (
    <>

      <div>
        <div className="breadcrumbs-main-container">
          <div className='breadcrumbs-container'>
            <h2>Kontakt os</h2>
            <div className='breadcrumb'>
              <a href='/'>Vores services+ </a>/<p>Services</p>
            </div>
          </div>
        </div>
      </div>


      <div className="services-main-container">
        <div className="services-container">
          <div className="services-title-container">
            { service && service.map( s =>

              <div className='services-card'>
                <h2>{ s.title }</h2>
              </div>

            ) }
          </div>


          <div className="services-main-text-container">
            <div className="services-main-text">
              { service && service.slice(0, 1).map( s =>

                <div className='services.info-card'>
                  <img className='info-img' src={"http://localhost:5333/images/service/" + s.image} />
                  <h2>{ s.title }</h2>
                  <p>{parser(s.content)}</p>
                </div>

              ) }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Services