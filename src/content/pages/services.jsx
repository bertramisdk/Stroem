import React, { useState, useEffect } from 'react'
import { getService } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './services.scss'

const Services = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ service, setService ] = useState();

  const [ showService, setShowservice ] = useState();

  

  useEffect( () => {
    setLoading( true )
    getService()
      .then( ( response ) => {
        setService( response.data )
        setShowservice(response.data[0])
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
            { service && service.map( (s,id) =>

              <div onClick={() => setShowservice(s)} className={`services-card ${showService._id === s._id ? 'service-active' : ''}`} key={id}>
                <h2>{ s.title } →</h2>
              </div>

            ) }
          </div>


          <div className="services-main-text-container">
            <div className="services-main-text">
              {showService && (
                 <div className='services-info-card'>
                  <img className='info-img' src={"http://localhost:5333/images/service/" + showService.image} />
                  <h2>{ showService.title }</h2>
                  <p>{parser(showService.content)}</p>
                </div>

              )

              }
            
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Services