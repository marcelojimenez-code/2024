import React, { useEffect, useState } from 'react';
import {fetchVictimas} from '../Components/api/Victimas'
import {fetchDelitos} from '../Components/api/Delitos'
import Swal from 'sweetalert2';
import './Datatable.css'

const DatatableGestor = () => {
  const [victimas, setVictimas] = useState([]);
  const [delitos, setDelitos] = useState([]);
  const [selectedVictimas, setSelectedVictimas] = useState([]);

  useEffect(() => {
    // Función para obtener las víctimas desde el backend
    const getVictimas = async () => {
        const data = await fetchVictimas(); // Endpoint del backend
        const victimasWithCheck = data.map((victima) => ({
          ...victima,
          isChecked: false,
          delito: '',
          ruc: '',
          siNo: false,
        }));
        setVictimas(victimasWithCheck); 
    }


    const getDelitos = async () => {
      try {
        const data = await fetchDelitos();
        setDelitos(data);
      } catch (error) {
        console.error('Error al obtener los delitos:', error);
      }
    };

    getVictimas(); 
    getDelitos();
  }, []);


  // Función para manejar el cambio en el select de "Delito"
  const handleDelitoChange = (id, value) => {
    const updatedVictimas = victimas.map((victima) =>
      victima.id === id ? { ...victima, delito: value } : victima
    );
    setVictimas(updatedVictimas);
  };

  // Función para manejar el cambio en el input de "RUC"
  const handleRucChange = (id, value) => {
    const updatedVictimas = victimas.map((victima) =>
      victima.id === id ? { ...victima, ruc: value } : victima
    );
    setVictimas(updatedVictimas);
  };

  // Función para manejar el cambio en el checkbox de "SI / NO"
  const handleSiNoChange = (id, isChecked) => {
    const updatedVictimas = victimas.map((victima) =>
      victima.id === id ? { ...victima, siNo: isChecked } : victima
    );
    setVictimas(updatedVictimas);
  };

  // Función para manejar el clic en el botón "Derivar"
  const handleDerivar = () => {
    const selected = victimas.filter((victima) => victima.isChecked);
    const cantidadSeleccionada = selected.length;
    console.log('Elementos seleccionados:', selected);

    // Aquí podrías enviar la información al backend o mostrarla en un mensaje
    let message = '';
    selected.forEach((victima) => {
      message += `
        ID: ${victima.id}
        Nacionalidad: ${victima.nacionalidad}
        Identificación: ${victima.identificacion}
        Nombres: ${victima.nombres}
        Apellido Paterno: ${victima.apellido_paterno}
        Apellido Materno: ${victima.apellido_materno}
        Teléfono: ${victima.telefono}
        Correo: ${victima.correo}
        Dirección: ${victima.direccion}
        Comuna: ${victima.comuna}
        Región: ${victima.region}
        Delito: ${victima.delito}
        RUC: ${victima.ruc}
        SI / NO: ${victima.siNo ? 'Sí' : 'No'}
      `;
    });

    // Mostrar alerta o SweetAlert con la cantidad de elementos seleccionados
    Swal.fire({
      title: 'Derivar',
      html: `Se han derivado ${cantidadSeleccionada} elementos:<br>${message}`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (

      <div className='espaciado'>
          <h4>Gestor de Denuncias </h4>
          <table className="responsive-table highlight">
            <thead>
              <tr>
                <th>Nacionalidad</th>
                <th>Identificación</th>
                <th>Nombres</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Delito</th> 
                <th>Ruc</th>
                <th>SI / NO</th>
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
                  <td>{victima.direccion}</td>
                  <td><select
                        value={victima.delito}
                        className="browser-default"
                        onChange={(e) => handleDelitoChange(victima.id, e.target.value)}
                      >
                        <option value="" disabled>
                          Seleccione un delito
                        </option>


                        {delitos.length > 0 && delitos.map((delito) => (
                            <option key={delito.cod_delito} value={delito.cod_delito}>
                              {delito.delito}
                            </option>
                        ))}
                      </select>
                  </td>

                  <td>

                      <input
                        type="text"
                        className="input-field"
                        value={victima.ruc}
                        onChange={(e) => handleRucChange(victima.id, e.target.value)}
                      />

                  </td>

                  <td>
                      <label>
                          <input
                            type="checkbox"
                            checked={victima.siNo}
                            onChange={(e) => handleSiNoChange(victima.id, e.target.checked)}
                          />
                          <span></span>
                      </label>
                  </td>

                  <td>
                    <button
                      className="waves-effect waves-light btn #0d47a1 blue darken-4 white-text"
                      onClick={() => handleDerivar()}
                    >
                      Transferir
                    </button>

                  </td>
                </tr>
              )
              )}
            </tbody>
          </table>
      </div>

  );
};

export default DatatableGestor;
