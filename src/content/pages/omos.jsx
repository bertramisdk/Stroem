import React, { useState, useEffect } from 'react'
import { getAbout } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './omos.scss'
import Aboutus from '../components/aboutus';
import Carousel from '../components/carousel'
import Team from '../components/team'

const Omos = () => {



  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ about, setAbout ] = useState();

  useEffect( () => {
    setLoading( true )
    getAbout()
      .then( ( response ) => {
        setAbout( response.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setAbout()
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )



  return (
    <>
      <div className="breadcrumbs-main-container">
        <div className='breadcrumbs-container'>
          <h2>Om os</h2>
          <div className='breadcrumb'>
            <a href='/'>Forside</a>/<p>Om os</p>
          </div>
        </div>
      </div>

      <div className='lidtomstroem-omos-container'>

        { about &&
          <div className='stroem-omos-container'>
            <h2>{ parser( about.title ) }</h2>
            <p className='teaser'>{ about.teaser }</p>

          </div>
        }



      </div>

        <Aboutus />


        <Carousel />

        <Team />

    </>
  )
}

export default Omos