import React, { useState, useEffect, useRef } from 'react'
import { getCarousel } from '../helpers/AdminFetch';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import parser from 'html-react-parser';
import './carousel.scss'
import Caro from 'nuka-carousel';

const Carousel = () => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [carousel, setCarousel] = useState();


    const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
    const [viewportRef] = useEmblaCarousel(
        {
            loop: true,
            slidesToScroll: 1
        },
        [autoplay.current]
    );



    useEffect(() => {
        setLoading(true)
        getCarousel()
            .then((response) => {
                setCarousel(response.data)
                setError(false)
            })
            .catch((err) => {
                setError(true)
                setCarousel()
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div style={{
            backgroundColor: "whitesmoke",
            paddingBottom: "4rem",
            position: "relative"
        }}>
            <div style={{
                overflow: "hidden",
                maxHeight: "400px",
                position: "absolute"
            }}>
                <img style={{
                    width: "100%",
                    objectFit: "cover",
                }} src="./imgs/bg.png" />
                <div style={{
                    backgroundColor: "rgba(52, 55, 66, 0.9)",
                    position: "absolute",
                    width: "100%",
                    height: "400px",
                    zIndex: 10,
                    top: 0
                }} />
            </div>
            <div className='card-box'>
                <h2 className="text-5xl text-white font-raleway font-semibold" style={{
                    fontSize: "3rem",
                    color: "white",

                }}>
                    Vores <span className="text-orange">kunder siger</span>
                </h2>
                <p className="font-raleway text-white mt-4">Lorem ipsum</p>



                {carousel && (
                    <div className="embla pb-10">
                    <div className="embla__viewport pt-20" ref={viewportRef}>
                        <div className="embla__container">
                            {carousel.map((testimonial) => (
                                <div
                                    key={testimonial._id}
                                    className="embla__testimonial_slide"
                                >
                                    <div className="embla__testimonial_slide--inner">
                                        <img
                                            className="card-picture"
                                            alt={testimonial.name}
                                            width="100"
                                            height="100"
                                            src={"http://localhost:5333/images/testimonial/" + testimonial.image}
                                        />
                                        <div className="carousel-card">
                                            <h4 className="card-title">
                                                {testimonial.name}
                                            </h4>
                                            <p className="card-rating">{testimonial.title}</p>
                                            <p className="card-message">
                                                {testimonial.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                )}

            </div>






            {/* <div className='carousel-main-container'>


      
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
               
            </div> */}
        </div>
    )
}

export default Carousel