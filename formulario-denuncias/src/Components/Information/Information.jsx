import React from 'react'
import './Information.css'

const Information = () => {
  return (
    <>
        <br />
        <div className="container">
            <div className="row">
                <blockquote className='blockquote-custom'>
                    <h4 className='fuente'>Observaciones: </h4>
                    <p className="truncate texto">
                        Es importante completar los datos obligatorios para que la denuncia cumpla con los requisitos que establece la ley en el artículo 174 del Código Procesal Penal. <br />
                        Estos están señalados con un asterisco rojo (*).  <br />
                        Los otros datos son importantes para la eficacia de la investigación por lo que se solicita llenarlos si los tiene. <br />
                        cuando termine de completar el formulario, ponga su nombre y RUT  </p>
                </blockquote>
            </div>
        </div>    
    </>
  )
}

export default Information
