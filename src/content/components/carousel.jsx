import React, { useState, useEffect } from 'react'
import { getCarousel } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './carousel.scss'
import Caro from 'nuka-carousel';

const Carousel = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ carousel, setCarousel ] = useState();

    useEffect( () => {
        setLoading( true )
        getCarousel()
            .then( ( response ) => {
                setCarousel( response.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setCarousel()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )

    return (
        <>

            <div className='carousel-text-container'>
                <h2>Vores <span className='orange'>kunder siger</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, atque.</p>
            </div>

            <div className='carousel-main-container'>


      
                <Caro wrapAround={ true } slidesToShow={3}>
                  
                        { carousel && carousel.slice(0,4).map( c =>
                            <div className='carousel-container'>
                            <div className='carousel-card'>
                                <img className='people-picture' src={"http://localhost:5333/images/testimonial/" + c.image}></img>
                                <h2>{c.name}</h2>
                                <h4>{c.title}</h4>
                                <p>{c.review}</p>
                            </div>
                            </div>
                        ) }
                    
                </Caro>
               
            </div>
        </>
    )
}

export default Carousel