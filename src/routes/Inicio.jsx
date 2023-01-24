import React from 'react'
import {NavLink} from 'react-router-dom'
import "../assets/Inicio.css"

const Inicio = () => {

  return (
    <div className='cont-inicio'>
      <h1 className='title-inicio'>Climostico</h1>
      <NavLink to='/clima' className='nav-link-inicio'>Buscar ciudad</NavLink>
    </div>
  )
}

export default Inicio