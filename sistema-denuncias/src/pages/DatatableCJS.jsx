import React, { useEffect, useState } from 'react';
import {fetchVictimas} from '../Components/api/Victimas'

const DatatableCJS = () => {
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
    getVictimas(); 
  }, []);


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
                    <td></td>
                    <td></td>
                </tr>
              )
              )}
            </tbody>
          </table>
      </div>    
  )
}

export default DatatableCJS
