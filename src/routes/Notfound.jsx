import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
        <h1>404</h1>
        <Link to='/' className='btn btn-outline-primary'>Inicio</Link>
    </div>
  )
}

export default Notfound