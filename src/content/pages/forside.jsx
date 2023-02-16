import React, { useState, useEffect } from 'react'
import { getSlider } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import Slider from '../components/Slider';
import './forside.scss'
import About from '../components/about';
import Service from '../components/service';
import Book from '../components/book';
import Carousel from '../components/carousel';
import Team from '../components/team';
import Nyenyheder from '../components/nyenyheder';
import Help from '../components/help';


const Forside = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ slider, setSlider ] = useState();

  useEffect( () => {
    setLoading( true )
    getSlider()
        .then( ( response ) => {
            setSlider( response.data )
            setError( false )
        } )
        .catch( ( err ) => {
            setError( true )
            setSlider()
        } )
        .finally( () => {
            setLoading( false )
        } )
}, [] )




  return (
    <>
    <div>
      { slider &&

                    <Slider className="slider" sliderImages={ slider } imagePath="http://localhost:5333/images/slider/" />
      }

    </div>


<About />

    
   <Help/>

    <Service />

    <Book />

    <Carousel/>

    <Team />

    <Nyenyheder />
    </>
  )
}

export default Forside