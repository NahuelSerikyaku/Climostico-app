import React from 'react'
import {NavLink} from 'react-router-dom'
import "../assets/Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className="container-fluid">
        
        <a className='navbar-brand' href="#">
          <i className="iTitle bi bi-brightness-high-fill"></i>
          <span className='nav-title span-title'>Climostico</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id='menu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><NavLink to='/' className='nav-link'>Inicio</NavLink></li>
            <li className='nav-item'><NavLink to='/clima' className='nav-link'>Clima</NavLink></li>
            <li className='nav-item'><NavLink to='/contacto' className='nav-link'>Contacto</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar