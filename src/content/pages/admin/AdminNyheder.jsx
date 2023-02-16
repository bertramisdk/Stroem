import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Loader from '../../components/Loader';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';

import { deleteNyhed, getNyheder } from '../../helpers/AdminFetch';

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

      if ( window.confirm( "Er du sikker på at du vil slette denne tur?" ) ) {

          setLoading( true )
          deleteNyhed( id )
              .then( ( nyhederdata ) => {
                  setMessage( "Tour med id'en " + title + " (" + id + ") er nu slettet" )

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
     <Link to="/admin/nyhederopret"> <button>Create Nyhed</button> </Link>
    { message && <h2>{ message }</h2> }
    { loading && <Loader /> }
    { error && <h2>Error...</h2> }
    {
        nyhed && nyhed.map( n =>
            <div key={ n._id }>
                <h2>{ n.title }</h2>
                <div>{ parser( n.content ) }</div>
                <AiFillDelete size='2em' color='red' title='Delete button' onClick={ () => handleDelete( n._id, n.title ) } />
                <Link to={ "/admin/nyhederret/" + n._id }>
                    <AiFillEdit size='2em' color='green' title='Edit button' />
                </Link>

            </div>
        )
    }
</div>
  )
}

export default AdminNyheder