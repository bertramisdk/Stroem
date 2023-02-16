import React, { useState, useEffect } from 'react'
import { getBook } from '../helpers/AdminFetch';
import parser from 'html-react-parser';
import './book.scss'
import { postBooking } from '../helpers/AdminFetch';


const Book = () => {

  const [ error, setError ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const [ content, setContent ] = useState();


  const handleSubmit = ( e ) =>{
    e.preventDefault()
    setLoading(true)


    let formData = new FormData( e.target )
    formData.append("content", content);
    postBooking( formData )
    .then((response) =>{
      e.target.reset()
    })
    .catch((err) =>{
      setError(true)
      console.log(err)
    })
    .finally(() =>{
      setLoading(false)
    })
  }


  return (
    <div className='book-container'>
      <div>
      <h2 className='orange'>Book</h2>
      <h2 >Service nu</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input required className='form-inputs' name="name" type="text" placeholder='Dit navn' />
        <input required className='form-inputs' name="email" type="email" placeholder='Din Email' />
        <input required className='form-inputs' name="phone" type="number" placeholder='Telefon nr.' />
        <input className='form-submit' type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Book