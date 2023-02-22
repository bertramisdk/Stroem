import React, { useState } from 'react'
import { createNyhed } from '../../helpers/AdminFetch'
import './admincreatenyheder.scss'



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
            .then( () => {
                e.target.reset() // Tømmere formularfelterne
                window.confirm( "ny nyhed er oprettet! id nummer: ")

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
        <div className='AdminNyhedCreate-main-container'>
            <div className='AdminNyhedCreate-container'>

            <h1>Opret en ny nyhed</h1>

            { message && <h2>{ message }</h2> }
            <form onSubmit={ handleSubmit }>

                {/* ----- Title ----- */ }
                <div>
                    <label htmlFor='title'>Nyhedens titel:</label>
                    <br />
                    <input className='form-inputs-nyheder' type="text" name="title" placeholder='Skriv din titel her' id="title" required />
                </div>

                {/* ----- Teaser ----- */ }
                <div>
                    <label htmlFor='content'> Nyhedens content</label>
                    <br />
                    <textarea className='form-inputs-nyheder' name="content" placeholder='Skriv din teaser her' id="content" required />

                </div>

                {/* ----- image ----- */ }
                <div>
                    <label htmlFor='img'>Vælg et coverbilled</label>
                    <br />
                    <input type="file" accept='image/*' name="image" id="img" required />
                </div>

                <button className='create-button' type='submit'>Opret Nyhed</button>




            </form>
            </div>
        </div>
    )
}

export default AdminCreateNyheder