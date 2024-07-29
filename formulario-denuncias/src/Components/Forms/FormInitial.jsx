import React, { useState, useEffect } from 'react';
import {fetchTipoDocumento} from '../api/tipoDocumento.js'

const FormInitial = () => {

  const [currentDate, setCurrentDate] = useState('');
  const [selectedTipoDocumento, setSelectedTipoDocumento] = useState([]);

  const [formData, setFormData] = useState({
    esExtranjero: '',
    esVictima :'',
    tipoDocumento :'',
    rut :''
  });  

   // Cargar datos desde localStorage al montar el componente
  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }


    const getTipoDocumento = async () => {
      try {
        const data = await fetchTipoDocumento();
        setSelectedTipoDocumento(data);
      } catch (error) {
        console.error('Error al obtener los tipo de documentos :', error);
      }
    };

    getTipoDocumento()
  }, []);

  useEffect(() => {
    // Formatear la fecha y hora como string legible
    const now = new Date();
    const formattedDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
        setCurrentDate(formattedDate);
  }, []);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if ( formData.rut === '' || formData.esVictima === '' || formData.esExtranjero === '') {
        M.toast({ html: 'Por favor completa todos los campos obligatorios.', classes: 'rounded' });
        return;
    }

    // Guardar fecha actual en localStorage junto con los datos del formulario
    const formDataWithDate = { ...formData, fecha: currentDate };
    localStorage.setItem('formData', JSON.stringify(formDataWithDate));

    console.log(formDataWithDate);

    // Limpiar el formulario después de guardar los datos
    setFormData({
        esExtranjero: '',
        esVictima :'',
        tipoDocumento :'',
        rut :''
    });    

  };

  return (
    <>
                <div>
                    <h6 className="right-align">Fecha : {currentDate}</h6>
                </div>
                
                <div className='left-align'>
                <form onSubmit={handleSubmit}>
                
                    <div className="row">
                        <div className="col s12">
                            <p>¿Es usted la víctima de los hechos que denunciará?</p>
                            <p>
                            <label>
                                <input
                                name="esVictima"
                                type="radio"
                                value="SI"
                                onChange={ handleChange }
                                checked={formData.esVictima === 'SI'}
                                />
                                <span>SI</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input
                                name="esVictima"
                                type="radio"
                                value="NO"
                                onChange={ handleChange }
                                checked={formData.esVictima === 'NO'}
                                />
                                <span>NO</span>
                            </label>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <p>¿Es usted extranjero?</p>
                            <p>
                            <label>
                                <input
                                name="esExtranjero"
                                type="radio"
                                value="SI"
                                onChange={ handleChange }
                                checked={formData.esExtranjero === 'SI'}
                                />
                                <span>SI</span>
                            </label>
                            </p>
                            <p>
                            <label>
                                <input
                                name="esExtranjero"
                                type="radio"
                                value="NO"
                                onChange={ handleChange }
                                checked={formData.esExtranjero === 'NO'}
                                />
                                <span>NO</span>
                            </label>
                            </p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col s6">
                            <select
                              value={formData.tipoDocumento}
                              className="browser-default"
                              onChange={(e) => handleDelitoChange(formData.tipoDocumento, e.target.value)}
                            >
                              <option value="" disabled>
                                Seleccione un delito
                              </option>


                              {selectedTipoDocumento.length > 0 && selectedTipoDocumento.map((tipoDocumento) => (
                                  <option key={tipoDocumento.id} value={tipoDocumento.id}>
                                    {tipoDocumento.gls_documento}
                                  </option>
                              ))}
                            </select>
                            
                        </div>

                        <div className="input-field col s6">
                            <input
                            id="rut"
                            name="rut"
                            type="text"
                            className="validate"
                            value={formData.rut}
                            onChange={handleChange}
                            data-length="10"
                            required
                            />
                            <label htmlFor="rut">RUT</label>
                            <span className="helper-text" data-error="Ingrese un RUT válido"></span>
                        </div>

                        <button className="btn waves-effect waves-light #0d47a1 blue darken-4 white-text" type="submit">
                        Enviar
                        <i className="material-icons right">send</i>
                        </button>
                    </div>    
                </form>
                </div>
    </>            

  );
};

export default FormInitial;
