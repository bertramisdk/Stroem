import React, { useState, useEffect } from 'react'
import { getTeam } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './team.scss'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialVimeo} from 'react-icons/ti'
import {TiSocialLinkedin} from 'react-icons/ti'


const Team = () => {

    const [ error, setError ] = useState( false );
    const [ loading, setLoading ] = useState( false );
    const [ team, setTeam ] = useState();

    useEffect( () => {
        setLoading( true )
        getTeam()
            .then( ( response ) => {
                setTeam( response.data )
                setError( false )
            } )
            .catch( ( err ) => {
                setError( true )
                setTeam()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }, [] )



  return (
    <>
    <div className='team-main-container'>

        <div className="team-text-container">

            <h2>Vores <span className='orange'>team</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>


        <div className='team-container'>
        { team && team.map( (t, idx) =>
        <div className='team-card' key={idx}>
            <div className="overlay">
                <h2>{t.name}</h2>
               <p>{t.title}</p>
                <div className="social-links-team">
                    <TiSocialFacebook />
                    <TiSocialTwitter />
                    <TiSocialVimeo />
                    <TiSocialLinkedin />
                </div>
            </div>
            <div className='background-pictures'></div>
            <img className='team-pictures' src={"http://localhost:5333/images/team/" + t.image}></img>
            
        </div>
        )}
        </div>


    </div>
    </>
  )
}

export default Team