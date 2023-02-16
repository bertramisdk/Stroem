import React, { useState, useEffect } from 'react'
import { getFaq } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './faq.scss'
import Accordion from '../components/accordion';

const Faq = () => {



  
  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ accordion, setAccordion ] = useState();

  useEffect( () => {
    setLoading( true )
    getFaq()
      .then( ( response ) => {
        setAccordion( response.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setAccordion()
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
            <h2>FAQ - ofte stillede spørgsmål</h2>
            <div className='breadcrumb'>
              <a href='/'>Forside</a>/<p>FAQ</p>
            </div>
          </div>
        </div>
      </div>




      <div className='accordion-container'>
        { accordion && accordion.map( a =>
         
            <Accordion item={a}/>  


        ) }
      </div>
    </>
  )
}

export default Faq