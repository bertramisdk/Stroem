import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Loader from '../../components/Loader';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import { deleteNyhed, getNyheder } from '../../helpers/AdminFetch';
import './adminnyheder.scss'

const AdminNyheder = () => {


  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ nyhed, setNyhed ] = useState();

  const [ message, setMessage ] = useState();

  useEffect( () => {
      setLoading( true )
      getNyheder()
          .then( ( nyhederdata ) => {
              setNyhed( nyhederdata.data )
          } )
          .catch( ( err ) => {
              setError( true )
          } )
          .finally( () => {
              setLoading( false )
          } )
  }, [ 2000, message ] )

  const handleDelete = ( id, title ) => {

      if ( window.confirm( "Er du sikker på at du vil slette denne nyhed?" ) ) {

          setLoading( true )
          deleteNyhed( id )
              .then( ( nyhederdata ) => {
                setMessage("nyhed med id'en " + title + " (" + id + ") er nu slettet")

              } )
              .catch( ( err ) => {
                  setError( true )
                  console.log( err )
              } )
              .finally( () => {
                  setLoading( false )
              } )
      }
  }



  return (
    <div className='AdminNyhed'>
     <Link to="/admin/nyhederopret"> <button className='nyhed-button'>Create Nyhed</button> </Link>
    { message && <h2 className='message'>{ message }</h2> }
    { loading && <Loader /> }
    { error && <h2>Error...</h2> }

   
       
                <div className="admin-nyheder-container">
                <div className="admin-nyheder-card-container">
            <div className="admin-cards-container">

    {
        nyhed && nyhed.map( n =>
            <div key={ n._id }>
                   <div className='nyheder-card'>
                      <div className="nye-overlay">
                        <h2 className='nye-date'>
                          { new Date( n.received ).toLocaleDateString( "en-GB", { day: "numeric", month: "short" } ) }
                        </h2>
                      </div>
                      <img className='nye-img' src={ "http://localhost:5333/images/news/" + n.image } alt="img" />
                      <h2 className='title'>{ n.title }</h2>
                      <p className='content'>{ n.content.slice( 0, 100 ) }...</p>

                    <div className='edit-delete'>
                     <AiFillDelete size='2em' color='red' title='Delete button'  onClick={ () => handleDelete( n._id, n.title ) } />
                     <Link to={ "/admin/nyhederret/" + n._id }>
                     <AiFillEdit size='2em' color='green' title='Edit button' />
                     </Link>
                    </div>

                    </div>
                </div>

          







        )
    }
   </div>
   </div>
   </div>
  </div>
 

  )
}

export default AdminNyheder