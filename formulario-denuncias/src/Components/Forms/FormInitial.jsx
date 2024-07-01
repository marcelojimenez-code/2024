import React, { useState } from 'react';

const FormInitial = () => {

  const [formData, setFormData] = useState({
    esVictima :'',
    tipoDocumento :'',
    rut :''
  });  

  const [errorEsVictima, setErrorEsVictima] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( formData.rut === '' || formData.esVictima === '') {
        M.toast({ html: 'Por favor completa todos los campos obligatorios.', classes: 'rounded' });
        return;
    }

    console.log(formData);

    setFormData({
        esVictima :'',
        tipoDocumento :'',
        rut :''
    });    

  };

  return (
            <div className="container">
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
                        <div className="input-field browser-default col s6">
                            <select
                            name='tipoDocumento'
                            id='tipoDocumento'
                            value={formData.tipoDocumento}
                            onChange={handleChange}
                            >
                            <option value="0" disabled selected>-- SELECCIONE --</option>
                            <option value="1">CEDULA DE IDENTIDAD</option>
                            <option value="2">PASAPORTE</option>
                            <option value="3">LICENCIA DE CONDUCIR</option>
                            <option value="4">CARNE ELECTORAL</option>
                            <option value="5">CEDULA DE IDENTIDAD EXTRANJERA</option>
                            </select>
                            <label>Tipo de documento</label>
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
