import React, { useState, useEffect } from 'react'
import { getAbout } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './about.scss'


const About = () => {

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
    <div className='lidtomstroem-container'>

      { about &&
        <div className='stroem-container'>
          <h2>{ parser( about.title ) }</h2>
          <p className='teaser'>{ about.teaser }</p>
          <button className='stroem-button'>Læs mere</button>

        </div>
      }

    </div>
  )
}

export default About