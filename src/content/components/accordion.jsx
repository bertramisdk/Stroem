import React, { useState, useEffect } from 'react'



const Accordion = ({item}) => {

    const [ active, setActive ] = useState( false );


  return (
    
    <div className='accordion-card'>
    <button class="accordion" onClick={() => setActive(!active)}>{item.question}</button>
    
    { active && (
    <div class="panel">
      <p>{item.answer}</p>
    </div>
    )}

  </div>
  )
}

export default Accordion