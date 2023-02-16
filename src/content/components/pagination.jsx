import React from 'react'
import './pagination.scss'


const Pagination = ( props ) => {
    // const Pagination = ( {currentPage, setCurrentPage, itemsPerPage, itemsLength} ) => {


    let currentPage = props.currentPage;
    let setCurrentPage = props.setCurrentPage;
    let itemsPerPage = props.itemsPerPage;
    let itemsLength = props.itemsLength;

    let numberOfPages = Math.ceil( itemsLength / itemsPerPage )



    return (

        <div>

            <button className='pagination-prev' disabled={ currentPage <= 0 } onClick={ () => setCurrentPage( currentPage - 1 ) }> Prev</button>

            {
                [ ...Array( numberOfPages ) ].map( ( x, i ) =>
                    <button className={ " pagination-button " + ( i === currentPage ? "pagination-active" : "" ) } onClick={ () => setCurrentPage( i ) } key={ i }>{ i + 1 }</button>
                )
            }

            <button className='pagination-next' disabled={ currentPage >= numberOfPages - 1 } onClick={ () => setCurrentPage( currentPage + 1 ) }>Next</button>


        </div>
    )
}

export default Pagination