import React, { useState, useEffect } from 'react';

const FormInitial = () => {

  const [currentDate, setCurrentDate] = useState('');

  const [formData, setFormData] = useState({
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

    if ( formData.rut === '' || formData.esVictima === '') {
        M.toast({ html: 'Por favor completa todos los campos obligatorios.', classes: 'rounded' });
        return;
    }

    // Guardar fecha actual en localStorage junto con los datos del formulario
    const formDataWithDate = { ...formData, fecha: currentDate };
    localStorage.setItem('formData', JSON.stringify(formDataWithDate));

    console.log(formDataWithDate);

    // Limpiar el formulario después de guardar los datos
    setFormData({
        esVictima :'',
        tipoDocumento :'',
        rut :''
    });    

  };

  return (
            <div className="container">
                <h1>Fecha</h1>
                <p>{currentDate}</p>
                <br />
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
                        <div className="col s6">
                            <select
                            name='tipoDocumento'
                            id='tipoDocumento'
                            className="input-field browser-default"
                            value={formData.tipoDocumento}
                            onChange={handleChange}
                            >
                            <option value="0" disabled>Tipo de Documento</option>
                            <option value="1">CEDULA DE IDENTIDAD</option>
                            <option value="2">PASAPORTE</option>
                            <option value="3">LICENCIA DE CONDUCIR</option>
                            <option value="4">CARNE ELECTORAL</option>
                            <option value="5">CEDULA DE IDENTIDAD EXTRANJERA</option>
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

                        <button className="btn waves-effect waves-light" type="submit">
                        Enviar
                        <i className="material-icons right">send</i>
                        </button>
                    </div>    
                </form>
            </div>
  );
};

export default FormInitial;
