import React, { useState, useEffect } from 'react';
import './FormHechos.css'

const FormHechos = () => {

    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [region, setRegion] = useState('');
    const [comuna, setComuna] = useState('');
    const [relato, setRelato] = useState('');
    const [documentos, setDocumentos] = useState(null);

    useEffect(() => {

        const datePickerOptions = {
          format: 'dd/mm/yyyy',
          defaultDate: new Date(),
          setDefaultDate: true,
          autoClose: true,
        };

        const datepickerElems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datepickerElems, datePickerOptions);

        // Configuración específica del timepicker
        const timepickerElems = document.querySelectorAll('.timepicker');
        M.Timepicker.init(timepickerElems);

        // Configuración específica del select
        const selectElems = document.querySelectorAll('select');
        M.FormSelect.init(selectElems);

        // Inicializar los elementos que tienen contador de caracteres
        M.CharacterCounter.init(document.getElementById('pi_observaciones'));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Crear un objeto FormData
      const formData = new FormData();
            formData.append('fecha', fecha);
            formData.append('hora', hora);
            formData.append('region', region);
            formData.append('comuna', comuna);
            formData.append('relato', relato);
            
      if (documentos) {
        for (let i = 0; i < documentos.length; i++) {
          formData.append('documentos', documentos[i]);
        }
      }
  
      // Ejemplo de cómo enviar formData a través de fetch o axios a tu backend
      fetch('url_de_tu_backend', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Aquí puedes manejar la respuesta del servidor
      })
      .catch(error => {
        console.error('Error al enviar formulario:', error);
        // Aquí puedes manejar errores de envío
      });
    };
    

  return (
      <>
<form onSubmit={handleSubmit}>
    <div className="row">
          <div className="input-field col s12 m4">
            <input
              type="text"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
              className="datepicker"
            />
            <label htmlFor="fecha">Fecha</label>
          </div>
          <div className="input-field col s12 m4">
            <input
              type="text"
              id="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              className="timepicker"
            />
            <label htmlFor="hora">Hora</label>
          </div>
    </div>
    
    <div className="row">      
          <div className="input-field col s12 m6">
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="" disabled>Selecciona una región</option>
              <option value="region1">Región 1</option>
              <option value="region2">Región 2</option>
            </select>
            <label htmlFor="region">Región</label>
          </div>
          <div className="input-field col s12 m6">
            <select
              id="comuna"
              value={comuna}
              onChange={(e) => setComuna(e.target.value)}
              required
            >
              <option value="" disabled>Selecciona una comuna</option>
              <option value="comuna1">Comuna 1</option>
              <option value="comuna2">Comuna 2</option>
            </select>
            <label htmlFor="comuna">Comuna</label>
          </div>
   </div>       

   <div className="row">
        <div className="input-field col s12">
        <textarea 
                  className="materialize-textarea" 
                  name="relato" 
                  data-length="3000" 
                  id="relato" 
                  maxLength="3000" 
                  rows="5" 
                  style={{ minHeight: '150px' }}
                  required
          ></textarea>
        <label htmlFor="relato">Relato del hecho</label>
      </div>
  </div>

  <div className="row">
    <div className="file-field input-field">
      <div className="btn">
        <span>Adjuntar documentos</span>
        <input type="file" onChange={(e) => setDocumentos(e.target.files)} multiple />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Sube tus archivos" />
      </div>
    </div>
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
</>
  
  )
}

export default FormHechos
