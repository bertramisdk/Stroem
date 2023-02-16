import React, { useState, useEffect } from 'react'
import { getNyheder } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './nyheder.scss'
import Pagination from '../components/pagination';
import AmountPerPage from '../components/amountperpage';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Nyheder = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ nyheder, setNyheder ] = useState();

  const [ currentPage, setCurrentPage ] = useState( 0 )
  const [ itemsPerPage, setItemsPerPage ] = useState( 4 )

  let numberOfPages = Math.ceil( nyheder?.length / itemsPerPage )
  console.log( "tours i alt: ", nyheder?.lenth )
  console.log( "Antal sidder i alt: ", numberOfPages )

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
    <div className='nyheder-main-container'>
      <div className="breadcrumbs-main-container">
        <div className='breadcrumbs-container'>
            <h2>Nyheder</h2>
            <div className='breadcrumb'>
            <a href='/'>Forside</a>/<p>Nyheder</p>
            </div>
        </div>
      </div>
          <div className="nyheder-content-container">

            <div className="nyheder-container">
              <div className="nyheder-card-container">
                <div className="cards-container">


                  { nyheder && nyheder.map( ( n ) =>


                    <div className='nyheder-card'>
                      <div className="nye-overlay">
                        <h2 className='nye-date'>
                          { new Date( n.received ).toLocaleDateString( "en-GB", { day: "numeric", month: "short" } ) }
                        </h2>
                      </div>
                      <img className='nye-img' src={ "http://localhost:5333/images/news/" + n.image } alt="img" />
                      <h2 className='title'>{ n.title }</h2>
                      <p className='content'>{ n.content.slice( 0, 100 ) }...</p>

                    </div>
                  ).reverse().slice( currentPage * itemsPerPage, ( currentPage * itemsPerPage ) + itemsPerPage ) }
                </div>



                { nyheder &&
                  <div className="pagination-container">

                    <Pagination

                      itemsPerPage={ itemsPerPage }
                      itemsLength={ nyheder.length }
                      currentPage={ currentPage }
                      setCurrentPage={ setCurrentPage } />


                    <AmountPerPage
                      options={ [ 2, 4, 5, 10 ] }
                      itemsPerPage={ itemsPerPage }
                      setItemsPerPage={ setItemsPerPage }
                      setCurrentPage={ setCurrentPage }
                    />
                  </div>
                }


              </div>



            </div>

            <div className="arkiv-container">

              <h2 className="arkiv-title">Arkiv</h2>

              { nyheder && nyheder.map( ( n ) =>


                <div className='arkiv-card'>


                  <img className='arkiv-img' src={ "http://localhost:5333/images/news/" + n.image } alt="img" />
                  <div className='arkiv-text'>
                    <h4 className='arkiv-card-title'>{ n.title }</h4>
                    <p className='arkiv-date'>
                      <span><FaRegCalendarAlt /></span>  { new Date( n.received ).toLocaleDateString( "en-GB", { day: "numeric", month: "short", year: "numeric" } ) }
                    </p>
                  </div>


                </div>
              ).reverse().slice( 4, 8 ) }

            </div>

          </div>

        </div>
        )
}

        export default Nyheder