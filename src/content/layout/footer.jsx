import React, { useState, useEffect, useContext } from 'react'
import './footer.scss'
import { NavLink, Link } from 'react-router-dom';
import { LoginContext } from '../context/logincontext'
import { getContactInformation } from '../helpers/AdminFetch'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { TiSocialVimeoCircular } from 'react-icons/ti'
import { TiSocialLinkedinCircular } from 'react-icons/ti'


const Footer = () => {

  const { user, } = useContext(LoginContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [kontakt, setKontakt] = useState();

  useEffect(() => {
    setLoading(true)
    getContactInformation()
      .then((response) => {
        setKontakt(response.data)
        setError(false)
      })
      .catch((err) => {
        setError(true)
        setKontakt()
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className='footer-main-container'>
        <div className="footer-container">


          <div className='footer-card-1'>
            <img src="/imgs/logo.png" alt="logo" />
            <p>Som medlem af elinstallatørenes landbrugsorganisation, ELFO, er vi tilsluttet et ankernævn og en garantiordring</p>
          </div>


          <div className='footer-card-2'>
            <h2>Link</h2>
            <p>{">"} <a href="">FAQ</a></p>
            <p>{">"} <a href="">Om os</a></p>
            <p>{">"} <a href="">Kontakt os</a></p>
            <p>{">"} <a href="">Services</a></p>
            <p> {"> "} 
              {
                user ?
                  <NavLink to="admin">LOGIN</NavLink>
                  :
                  <NavLink to="login">LOGIN</NavLink>
              }
            </p>

          </div>


          <div className='footer-card-3'>
            {kontakt &&

              <div>

                <h2>Kontakt os</h2>

                <div className='card-3-style padding-3'> <h4>Adresse:</h4> <p>{kontakt.address}, {kontakt.zipcity}</p>   </div>

                <div className='card-3-style'> <h4>Telefon:</h4> <p>{kontakt.phone}</p>  </div>

                <div className='card-3-style'> <h4>Email:</h4> <p>{kontakt.email}</p>  </div>

              </div>



            }
          </div>

          <div className='footer-card-4'>
            <h2>Nyhedsbrev</h2>
            <p>Tilmeld dig vores nyhedsbrev her</p>

            <div>
              <form className='footer-form'>
                <input required className='form-email' type="email" placeholder='Din Email' />
                <input className='footer-button' type="submit" value="Tilmeld" />
              </form>
            </div>


          </div>

        </div>
        <div className="bottom-footer-container">
          <div className="bottom-footer">
            <h2><span className='orange'>Strøm</span> @ 2017 All Right Reserved</h2>
            <div className='logo-container'>
              <div><TiSocialFacebookCircular /></div>
              <div><TiSocialTwitterCircular /></div>
              <div><TiSocialVimeoCircular /></div>
              <div><TiSocialLinkedinCircular /></div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer