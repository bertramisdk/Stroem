import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import './login.scss'

// Hent Login fra contextprovider
import { LoginContext } from '../context/logincontext'

const Login = () => {

  // Hent sign-in-metoden fra context-filen
  const { signIn, user } = useContext( LoginContext );

  const [ userName, setUserName ] = useState()
  const [ password, setPassword ] = useState()
  const [ message, setMessage ] = useState()

  // Når man allerede er logget ind sendes man direkte til admin
  if ( user ) {
    return <Navigate to="/admin/nyheder" replace />
  }

  // Håndtere login - med indhold fra login-form
  const handleLogin = ( e ) => {
    e.preventDefault(); //Forhindre reloading af siden.

    signIn( userName, password );



  }


  return (
    <div className='Login'>

      {/* {
        user && <h2>Bruger er logget som: { user }</h2>
      } */}
      <div className="main-login-container">
  <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={ handleLogin }>

        <div>
       
          <br />
          <input type="text" onChange={ ( e ) => setUserName( e.target.value ) } id="inpBruger" placeholder="Brugernavn" />
        </div>

        <div>
         
          <br />
          <input type="password" onChange={ ( e ) => setPassword( e.target.value ) } id="inpPassword" placeholder='Adgangskpde' />
        </div>

        <button className='login-button' type="submit">Login</button>

      </form>
    </div>
  </div>
  </div>
  )
}

export default Login