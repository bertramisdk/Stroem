import React from 'react'
import './kontakt-form.scss'

const Kontaktform = () => {
  return (
    <div>
    <form className='footer-form'>
      <input required className='form-name' type="text" placeholder='Dit navn' />
      <input required className='form-email' type="email" placeholder='Din Email' />
      <input required className='form-telephone' type="number" placeholder='Dit tlf' />
      <input required className='form-message' type="text" placeholder='Din besked' />
      <input className='kontakt-button' type="submit" value="SEND BESKED" />
    </form>
  </div>

  )
}

export default Kontaktform