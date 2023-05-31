import React, { useState, useEffect } from 'react'
import { getAbout } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './aboutus.scss'

const Aboutus = () => {


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
        <div className='aboutus-main-container'>
            <div className="abousus-container">
                <div className="aboutus-text">
                    { about &&
                        <div>
                            <h2>{ parser( about.content.slice( 0, 21 ) ) }</h2>
                            <p className='aboutus-p'>{ parser( about.teaser.slice( 0, 250 ) ) }</p>
                        </div>
                    }
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>consectetur adipisicing elit. A, veniam.</li>

                    <button className='aboutus-button'><a href="kontaktos"> Kontakt os</a></button>

                </div>

                <div className="aboutus-image-container">

                    <img className='aboutus-img' src="/imgs/1.jpg" alt="aboutus image" />

                </div>
            </div>
        </div>
    )
}

export default Aboutus