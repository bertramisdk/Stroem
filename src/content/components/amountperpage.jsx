import React from 'react'
import './amountperpage.scss'

const AmountPerPage = ( props ) => {
    
    let options = props.options;
    let setCurrentPage = props.setCurrentPage;
    let setItemsPerPage = props.setItemsPerPage;
    let itemsPerPage = props.itemsPerPage

    return (
        <select className='amount-select' defaultValue={ itemsPerPage } onChange={ ( e ) => {
            setItemsPerPage( parseInt( e.target.value ) );
            setCurrentPage( 0 )
        } }>
            {
                options.map( o =>
                    <option value={ o } key={ o }>{ o }</option>
                )
            }


            {/* <option value="2">2</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="10">10</option> */}
        </select>
    )
}

export default AmountPerPage