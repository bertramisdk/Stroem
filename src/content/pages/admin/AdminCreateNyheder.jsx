import React, { useState } from 'react'
import { createNyhed } from '../../helpers/AdminFetch'



const AdminCreateNyheder = () => {

    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false )
    const [ message, setMessage ] = useState()

    const [ content, setContent ] = useState()
    const [ roomtype, setRoomtype ] = useState()


    const handleSubmit = ( e ) => {
        e.preventDefault() // Forhindre reload af side

        setLoading( true )

        let formData = new FormData( e.target )


        
        createNyhed( formData )
            .then( ( response ) => {
                e.target.reset() // Tømmere formularfelterne
                setMessage( "ny tur er oprettet! id nummer: " + response.data._id )

            } )
            .catch( ( err ) => {
                setError( true )
                console.log( err )
            } )
            .finally( () => {
                setLoading( false )
            } )

    }


    return (
        <div className='AdminNyhedCreate'>

            <h1>Opret en ny tur</h1>

            { message && <h2>{ message }</h2> }
            <form onSubmit={ handleSubmit }>

                {/* ----- Title ----- */ }
                <div>
                    <label htmlFor='title'>Nyhedens titel:</label>
                    <br />
                    <input type="text" name="title" placeholder='Skriv din titel her' id="title" required />
                </div>

                {/* ----- Teaser ----- */ }
                <div>
                    <label htmlFor='content'> Nyhedens content</label>
                    <br />
                    <textarea name="content" placeholder='Skriv din teaser her' id="content" required />

                </div>

                {/* ----- image ----- */ }
                <div>
                    <label htmlFor='img'>Vælg et coverbilled</label>
                    <br />
                    <input type="file" accept='image/*' name="image" id="img" required />
                </div>

                <button type='submit'>Opret Nyhed</button>




            </form>
        </div>
    )
}

export default AdminCreateNyheder