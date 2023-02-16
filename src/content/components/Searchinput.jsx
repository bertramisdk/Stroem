import React from 'react'
import { useNavigate } from 'react-router-dom'
import './searchinput.scss'
import {BiSearch} from 'react-icons/bi'


const SearchInput = () => {

    const navigate = useNavigate()

    const handleSearch = ( e ) => {
        e.preventDefault()
        navigate( "/searchresult/" + e.target.inpSearch.value )
    }


    return (
        <form className='search-form' onSubmit={ handleSearch }>
            <input className='Searchinput' type="text" name="inpSearch" placeholder='Søg' />
          

        </form>
    )
}

export default SearchInput