import React, { useState, useEffect } from 'react'
import "./slider.scss"
import parser from 'html-react-parser';
import {BsArrowLeftCircle} from 'react-icons/bs'
import {BsArrowRightCircle} from 'react-icons/bs'


const Slider = ( props ) => {

    const [ slideIndex, setSlideIndex ] = useState( 0 )

    let sliderImages = props.sliderImages;
    let imagePath = props.imagePath;

    let t;

    useEffect( () => {

        let i;
        let slides = document.getElementsByClassName( "mySlides" );
        // let dots = document.getElementsByClassName( "dot" );

        if ( slideIndex > slides.length - 1 ) {
            setSlideIndex( 0 )
            return;
        }

        if ( slideIndex < 0 ) {
            setSlideIndex( slides.length - 1 )
            return;
        }


        for ( i = 0; i < slides.length; i++ ) {
            slides[ i ].style.display = "none";
        }


        // for ( i = 0; i < dots.length; i++ ) {
        //     dots[ i ].className = dots[ i ].className.replace( " active", "" );
        // }


        slides[ slideIndex ].style.display = "block";
        // dots[ slideIndex - 1 ].className += " active";


        t = setTimeout( () => setSlideIndex( slideIndex + 1 ), 3000 )

        return () => {
            clearTimeout( t )
        }

    }, [ slideIndex ] )

    return (

        <div className='Slider'>


            <div className="slideshow-container">

                {
                    sliderImages && sliderImages.map( ( s, i ) =>

                        <div className="mySlides fade" key={ "slider" + i }>

                            <div className="numbertext">{ i + 1 } / { sliderImages.length }</div>
                            <img src={ imagePath + s.image } style={ { width: "100%" } } />
                            <div className='slider-text-container'>
                             <div className="text">{parser(s.caption)}</div> 
                             <button className='slider-button'>KONTAKT OS</button>
                            </div>
                        </div>

                    )
                }





                {/* <div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src="img_snow_wide.jpg" style="width:100%"/>
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" style="width:100%"/>
  <div className="text">Caption Three</div>
</div> */}

                <span className="prev" onClick={ () => setSlideIndex( slideIndex - 1 ) }>{<BsArrowLeftCircle />}</span>
                <span className="next" onClick={ () => setSlideIndex( slideIndex + 1 ) }>{<BsArrowRightCircle />}</span> 

            </div>


            {/* <div className='dot-container'>


                {
                    sliderImages && sliderImages.map( ( s, i ) =>
                        <span onClick={ () => setSlideIndex( i ) } className={ i === slideIndex ? "dot active" : "dot" } key={ "dot" + i }></span>
                    )
                }
            </div> */}


        </div>
    )
}

export default Slider