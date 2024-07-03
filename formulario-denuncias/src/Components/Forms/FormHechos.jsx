import React, { useEffect } from 'react';
import './FormHechos.css'

const FormHechos = () => {

    useEffect(() => {
        // Inicializar los elementos que tienen contador de caracteres
        M.CharacterCounter.init(document.getElementById('pi_observaciones'));
      }, []);
    

  return (

            <form action="" name="frm-RegistroHechosDenunciados" id="frm-RegistroHechosDenunciados">
      {/* Fecha en que ocurrieron los hechos */}
      <div className="row">
        <div className="input-field col s12 m4">
          <i className="bi bi-file-earmark-person prefix"></i>
          <input type="text" className="validate" name="pi_nombres" id="pi_nombres" placeholder="Nombres" />
          <label htmlFor="pi_nombres">Fecha en que ocurrieron los hechos</label>
        </div>
        
        {/* Hora aproximada en que ocurrieron los hechos */}
        <div className="input-field col s12 m4">
          <i className="bi bi-file-earmark-person prefix"></i>
          <input type="text" className="validate" name="pi_apellido_paterno" id="pi_apellido_paterno" placeholder="Apellido Paterno" />
          <label htmlFor="pi_apellido_paterno">Hora aproximada en que ocurrieron los hechos</label>
        </div>
      </div>

      {/* Domicilio, Comuna y Región */}
      <div className="row">
        <div className="input-field col s12 m4">
          <i className="bi bi-file-earmark-person prefix"></i>
          <input type="text" className="validate" name="pi_domicilio" id="pi_domicilio" placeholder="Domicilio" />
          <label htmlFor="pi_domicilio">Domicilio o datos para posterior ubicación</label>
        </div>
        
        <div className="input-field col s12 m4">
          <i className="bi bi-file-earmark-person prefix"></i>
          <input type="text" className="validate" name="pi_comuna" id="pi_comuna" placeholder="Comuna" />
          <label htmlFor="pi_comuna">Comuna en que ocurrieron los hechos</label>
        </div>
        
        <div className="input-field col s12 m4">
          <i className="bi bi-file-earmark-person prefix"></i>
          <input type="text" className="validate" name="pi_region" id="pi_region" placeholder="Región" />
          <label htmlFor="pi_region">Región en que ocurrieron los hechos</label>
        </div>
      </div>

      {/* Observaciones */}
      <div className="row">
        <div className="input-field col s12">
          <i className="bi bi-chat-left-dots prefix"></i>
          <textarea 
            className="materialize-textarea" 
            name="pi_observaciones" 
            data-length="3000" 
            id="pi_observaciones" 
            maxLength="3000" 
            rows="5" 
            style={{ minHeight: '150px' }}
          >

          </textarea>
          <label htmlFor="pi_observaciones">En qué consistieron los hechos que denuncia:</label>
        </div>
      </div>

      {/* Espacio en blanco */}
      <div className="row">
        <div className="col s12">&nbsp;</div>
      </div>

      <div className="row">
              <div className="input-field col s12 right">
                <button className="btn waves-effect waves-light #0d47a1 blue darken-4 white-text" type="submit" name="action">
                  Enviar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
    </form>
  
  )
}

export default FormHechos
