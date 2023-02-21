import React, { useState, useEffect } from 'react'
import { getService } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './service.scss'



const Service = () => {


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
            <div className='service'>

                <div className='service-text-container'>
                    <h2>Vores <span>services</span></h2>
                    <p className='p-head'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>

                    <div className='service-text-card'>
                        { service && service.map( (s, idx) =>
                            <div className='text-card' key={idx}>
                                <span className={s.icon}></span>
                                <div>
                                <h3>{ s.title }</h3>
                                <p>{ s.teaser }</p>
                                </div>
                            </div>

                        ) }
                    </div>
                </div>




            <div className='service-img-container'>
                <img className='service-img' src="/imgs/1.png" alt='logo' />
            </div>

            </div>
        </>
    )
}

export default Service