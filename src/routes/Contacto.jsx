import React from 'react'
import '../assets/Contacto.css'


const Contacto = () => {

  return (
    <div className='bg-contacto'>

      <div className='info-cont'>
        <div className="info collapse" id="collapse1">
          Esta página fue creada por Nahuel Serikyaku, programador web.
          Se utilizó JavaScript con la libreria React, con herramientas como React-Router, Props, y Hooks como UseState, UseEffect. Ademas de CSS y acompañamiento de Bootstrap.

        </div>
        <button className="btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">Informacion</button>
      </div>
      
        <div className='redes'>
          <a href="https://www.linkedin.com/in/nahuelserikyaku/" className="iRedes bi bi-linkedin"></a>
          <a href="https://github.com/NahuelSerikyaku?tab=repositories" className="iRedes bi bi-github"></a>
          <a href="https://www.instagram.com/nahue_seri/" className="iRedes bi bi-instagram"></a>
        </div>

    </div>
  )
}

export default Contacto