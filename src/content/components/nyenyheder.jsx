import React, { useState, useEffect } from 'react'
import { getNyheder } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './nyenyheder.scss'



const NyesteNyheder = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ nyheder, setNyheder ] = useState();

  useEffect( () => {
    setLoading( true )
    getNyheder()
      .then( ( response ) => {
        setNyheder( response.data )
        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setNyheder()
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  return (
    <div className='nye-main-container'>
      <div className="nye-container">

        <div className='nye-text-container'>
          <h2>Sidste <span className='orange'>nyt</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, atque.</p>
        </div>


        <div className="nye-card-container">
          { nyheder && nyheder.map( (n, idx) =>
            <div className='nye-card' key={idx}>
              <div className="nye-overlay">
                <h2 className='nye-date'>
                  {new Date (n.received).toLocaleDateString("en-GB", {day: "numeric", month: "short"})}
                  </h2>
              </div>
              <img className='nye-img' src={ "http://localhost:5333/images/news/" + n.image } alt="img" />
              <h2 className='title'>{n.title}</h2>
              <p className='content'>{n.content.slice(0, 100)}</p>

            </div>
          ).reverse().slice( 0, 3 ) }
        </div>


        <button className='nye-button'>Flere nyheder...</button>


      </div>


    </div>
  )
}

export default NyesteNyheder