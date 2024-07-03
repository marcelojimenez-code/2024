import React, { useState } from 'react';
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.min.css';

const FormVictim = () => {
  const [formData, setFormData] = useState({
    nacionalidad: '',
    identificacion: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    direccion: '',
    avenidaCalle: '',
    blockDepto: '',
    villaPoblacion: '',
    comuna: '',
    region: ''
  });

  //const [token, setToken] = useState('');

/*
// Cargar token desde sessionStorage al cargar el componente
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
*/

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de campos obligatorios
    if (
      formData.nombres === '' ||
      formData.apellidoPaterno === '' ||
      formData.apellidoMaterno === '' ||
      formData.correo === ''
    ) {
      M.toast({ html: 'Por favor completa todos los campos obligatorios.', classes: 'rounded' });
      return;
    }

    // Simulación de envío de datos (aquí podrías enviar los datos a un servidor)
    console.log(formData);

      try {
            //const response = await axios.post('/api/victims', formData);

            // Mostrar SweetAlert de éxito
            Swal.fire({
              icon: 'success',
              title: '¡Formulario registrado correctamente!',
              showConfirmButton: false,
              timer: 1500
            });

            // Reiniciar el estado del formulario
            setFormData({
              nacionalidad: '',
              identificacion: '',
              nombres: '',
              apellidoPaterno: '',
              apellidoMaterno: '',
              telefono: '',
              correo: '',
              direccion: '',
              avenidaCalle: '',
              blockDepto: '',
              villaPoblacion: '',
              comuna: '',
              region: ''
            });
      } catch (error) {
            console.error('Error:', error);
            // Mostrar SweetAlert de error
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un problema al enviar el formulario',
            });
      }
  };


  // Función para manejar inicio de sesión y obtener token
  /*
  const handleLogin = async () => {
    try {
      // Aquí deberías implementar la lógica de inicio de sesión
      // Por ejemplo, un formulario de inicio de sesión que envía credenciales al backend

      // Simulación de inicio de sesión exitoso (reemplazar con tu lógica real)
      const response = await axios.post('/api/login', {
        username: 'usuario_prueba',
        password: 'contraseña_prueba'
      });

      // Almacenar token JWT en sessionStorage
      sessionStorage.setItem('token', response.data.token);
      setToken(response.data.token);
    } catch (error) {
      console.error('Error:', error);
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: error.response?.data?.message || 'Hubo un problema al iniciar sesión',
      });
    }
  };
  */

  return (

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="nacionalidad"
                  type="text"
                  className="validate"
                  name="nacionalidad"
                  value={formData.nacionalidad}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="nacionalidad">Nacionalidad</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="identificacion"
                  type="text"
                  className="validate"
                  name="identificacion"
                  value={formData.identificacion}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="identificacion">N° de Identificación o Pasaporte</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input
                  id="nombres"
                  type="text"
                  className="validate"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="nombres">Nombres *</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="apellidoPaterno"
                  type="text"
                  className="validate"
                  name="apellidoPaterno"
                  value={formData.apellidoPaterno}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="apellidoPaterno">Apellido paterno *</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="apellidoMaterno"
                  type="text"
                  className="validate"
                  name="apellidoMaterno"
                  value={formData.apellidoMaterno}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="apellidoMaterno">Apellido materno *</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="telefono"
                  type="tel"
                  className="validate"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <label htmlFor="telefono">Teléfono (fijo y/o celular)</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="correo"
                  type="email"
                  className="validate"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="correo">Correo electrónico *</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="direccion"
                  type="text"
                  className="validate"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                />
                <label htmlFor="direccion">Dirección</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="avenidaCalle"
                  type="text"
                  className="validate"
                  name="avenidaCalle"
                  value={formData.avenidaCalle}
                  onChange={handleChange}
                />
                <label htmlFor="avenidaCalle">Avda./Calle/Psje</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input
                  id="blockDepto"
                  type="text"
                  className="validate"
                  name="blockDepto"
                  value={formData.blockDepto}
                  onChange={handleChange}
                />
                <label htmlFor="blockDepto">Block/Depto</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="villaPoblacion"
                  type="text"
                  className="validate"
                  name="villaPoblacion"
                  value={formData.villaPoblacion}
                  onChange={handleChange}
                />
                <label htmlFor="villaPoblacion">Villa/Población</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="comuna"
                  type="text"
                  className="validate"
                  name="comuna"
                  value={formData.comuna}
                  onChange={handleChange}
                />
                <label htmlFor="comuna">Comuna</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="region"
                  type="text"
                  className="validate"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                />
                <label htmlFor="region">Región</label>
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
  );
};

export default FormVictim;
