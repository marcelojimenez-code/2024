import React, { useEffect, useState } from 'react';
import {fetchVictimas} from '../api/Victimas'
import Swal from 'sweetalert2';
import './Datatable.css'

const DataTable = () => {
  const [victimas, setVictimas] = useState([]);
  const [selectedVictimas, setSelectedVictimas] = useState([]);

  useEffect(() => {
    // Función para obtener las víctimas desde el backend
    const getVictimas = async () => {
        const data = await fetchVictimas(); // Endpoint del backend
        // Añadir propiedad isChecked para controlar los checkboxes
        const victimasWithCheck = data.map((victima) => ({ ...victima, isChecked: false }));
        //setVictimas(data); // Asignar datos obtenidos al estado
        setVictimas(victimasWithCheck); // Asignar datos obtenidos al estado

        // Inicializar modales de Materialize después de cargar los datos
        M.Modal.init(document.querySelectorAll('.modal'), {});
    }
    getVictimas(); // Llamar a la función al cargar el componente


  }, []);


  // Función para abrir el modal con la información detallada de la víctima
  const openModal = (id) => {
    const modal = M.Modal.getInstance(document.getElementById(`modal-${id}`));
    modal.open();
  };


  // Función para manejar el cambio en el checkbox
  const handleCheckboxChange = (id, isChecked) => {
    const updatedVictimas = victimas.map((victima) =>
      victima.id === id ? { ...victima, isChecked: isChecked } : victima
    );
    setVictimas(updatedVictimas);
  };

  // Función para derivar los elementos seleccionados
  const handleDerivar = () => {
    const selected = victimas.filter((victima) => victima.isChecked);
    const cantidadSeleccionada = selected.length;

    if (cantidadSeleccionada > 0){
        Swal.fire({          
          icon: 'success',
          text: `Se han derivado ${cantidadSeleccionada} elementos.`,
        });
    
        // Aquí puedes enviar la información al backend
        console.log('Elementos seleccionados:', selected);
        // Resetear los checkboxes seleccionados
        setSelectedVictimas(selected);
        setVictimas(victimas.map((victima) => ({ ...victima, isChecked: false })));
    }
    else{
      Swal.fire({
        icon: 'error',
        text: `No se ha derivado porque no hay elementos seleccionados.`,
      });
  
    }
  };

  return (

      <div className='espaciado'>
          <h4>Registro de Denuncias </h4>
          <table className="responsive-table highlight">
            <thead>
              <tr>
                <th>Nacionalidad</th>
                <th>Identificación</th>
                <th>Nombres</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Dirección</th>
                <th>Comuna</th>
                <th>Región</th>
                <th></th>
                <th>Derivar</th> 
              </tr>
            </thead>

            <tbody>
              {victimas.map(victima => (

                <tr key={victima.id}>
                  <td>{victima.nacionalidad}</td>
                  <td>{victima.identificacion}</td>
                  <td>{victima.nombres}</td>
                  <td>{victima.apellido_paterno}</td>
                  <td>{victima.apellido_materno}</td>
                  <td>{victima.telefono}</td>
                  <td>{victima.correo}</td>
                  <td>{victima.direccion}</td>
                  <td>{victima.comuna}</td>
                  <td>{victima.region}</td>
                  <td>
                    <button
                      data-target={`modal-${victima.id}`}
                      className="waves-effect waves-light btn modal-trigger"
                      onClick={() => openModal(victima.id)}
                    >
                      Detalle
                    </button>

                    <div id={`modal-${victima.id}`} className="modal">
                      <div className="modal-content">
                        <h4>Detalle de la Víctima</h4>
                        <p><strong>Nacionalidad:</strong> {victima.nacionalidad}</p>
                        <p><strong>Identificación:</strong> {victima.identificacion}</p>
                        <p><strong>Nombres:</strong> {victima.nombres}</p>
                        <p><strong>Apellido Paterno:</strong> {victima.apellido_paterno}</p>
                        <p><strong>Apellido Materno:</strong> {victima.apellido_materno}</p>
                        <p><strong>Teléfono:</strong> {victima.telefono}</p>
                        <p><strong>Correo:</strong> {victima.correo}</p>
                        <p><strong>Dirección:</strong> {victima.direccion}</p>
                        <p><strong>Comuna:</strong> {victima.comuna}</p>
                        <p><strong>Región:</strong> {victima.region}</p>
                      </div>
                      <div className="modal-footer">
                        <button className="modal-close waves-effect waves-green btn-flat">
                          Cerrar
                        </button>
                      </div>
                    </div>
                    
                  </td>

                  <td>
                    <label>
                      <input
                        type="checkbox"
                        checked={victima.isChecked}
                        onChange={(e) => handleCheckboxChange(victima.id, e.target.checked)}
                      />
                      <span></span>
                    </label>
                  </td>
                </tr>
              )
              )}
            </tbody>
          </table>

          <br />
          <div className="right">
              <button className="waves-effect waves-light btn-large #0d47a1 blue darken-4 white-text" onClick={handleDerivar}>
                Derivar <i className="material-icons right">send</i>
              </button>
          </div>
      </div>    

  );
};

export default DataTable;
