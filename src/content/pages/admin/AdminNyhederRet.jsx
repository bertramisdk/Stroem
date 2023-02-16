import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { getNyhedByID, editNyhed } from '../../helpers/AdminFetch'
import ErrorMessage from '../../components/ErrorMessage'



const AdminNyhedEdit = () => {

  const { ID } = useParams()
  console.log( ID );

  const [ nyhed, setNyhed ] = useState()
  const [ error, setError ] = useState( false )
  const [ loading, setLoading ] = useState( false )
  const [ message, setMessage ] = useState()

  const [ content, setContent ] = useState()


  useEffect( () => {
    setLoading( true )
    getNyhedByID( ID )
      .then( ( response ) => {
        setNyhed( response.data )

        setContent( response.data.content )
        

        setError( false )
      } )
      .catch( ( err ) => {
        setError( true )
        setNyhed() // Tøm data
      } )
      .finally( () => {
        setLoading( false )
      } )
  }, [] )

  const handleSubmit = ( e ) => {
    e.preventDefault()

    setLoading( true )

    let formData = new FormData( e.target )

    // formData.append( "content", content )

    editNyhed( formData, ID )
      .then( ( response ) => {
        console.log( response.data )
        setMessage( "Nyheden er rettet!" )

      } )
      .catch( ( err ) => {
        setError( true )
        console.log( err )
      } )
      .finally( () => {
        setLoading( false )
        window.scrollTo( 0, 0 ) //Scroll to top of page
      } )

  }

  return (
    <div className='AdminNyhedRet'>

      <h1>Ret Nyhed</h1>

      { error && <ErrorMessage /> }
      { loading && <Loader /> }

      {
        nyhed && <div>

          <form onSubmit={ handleSubmit }>

            {/* Title */ }
            <div>
              <label htmlFor='inpTitle'>Nyhedens titel:</label>
              <br />
              <input type="text" name="title" defaultValue={ nyhed.title } id="inpTitle" required />
            </div>

            {/* Teser */ }
            <div>
              <label htmlFor='inpTeaser'>Nyhedens content:</label>
              <br />
              <textarea name="content" defaultValue={ nyhed.content } id="inpTeaser" required />

            </div>


            {/* image */ }
            <div>
              <p>Nuværende coverbilled:</p>
              <img src={ "http://localhost:5333/images/news/" + nyhed.image } width="200px" />
              <br />
              <label htmlFor='img'>Vælg evt. et andet coverbilled</label>
              <br />
              <input type="file" accept='image/*' name="image" id="img" />
            </div>

            <button type='submit'>Ret tur</button>



          </form>
        </div>
      }



    </div>
  )
}

export default AdminNyhedEdit