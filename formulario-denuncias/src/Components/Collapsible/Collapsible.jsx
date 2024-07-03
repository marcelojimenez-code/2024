import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import Formulario from '../../Formulario';
import FormVictim from '../Forms/FormVictim';
import FormHechos from '../Forms/FormHechos';


const Collapsible = () => {

    // Estado para gestionar el contenido abierto/cerrado de los collapsibles
    const [activeCollapsible, setActiveCollapsible] = useState(0);

    // Función para manejar el cambio de collapsible activo
    const handleCollapsibleClick = (index) => {
    setActiveCollapsible(index === activeCollapsible ? -1 : index);
    };

    useEffect(() => {
        // Inicialización del collapsible al cargar el componente
        let collapsibles = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibles, {});
    }, []);

  return (
    <div className="container">
            <div className="row">
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header #f57c00 orange darken-2 white-text" onClick={() => handleCollapsibleClick(0)}><i className="material-icons">account_circle</i>ANTECEDENTES DE LA VÍCTIMA</div>
                        <div className={`collapsible-body ${activeCollapsible === 0 ? 'active' : ''}`}><FormVictim /></div>
                    </li>
                    <li>
                        <div className="collapsible-header #f57c00 orange darken-2 white-text" onClick={() => handleCollapsibleClick(1)}><i className="material-icons">gavel</i>ANTECEDENTES DEL/A DENUNCIANTE</div>
                        <div className={`collapsible-body ${activeCollapsible === 1 ? 'active' : ''}`}><span><FormVictim /></span></div>
                    </li>
                    <li>
                        <div className="collapsible-header #f57c00 orange darken-2 white-text" onClick={() => handleCollapsibleClick(2)}><i className="material-icons">account_balance</i>ANTECEDENTES DEL/A DENUNCIANTE</div>
                        <div className={`collapsible-body ${activeCollapsible === 2 ? 'active' : ''}`}><span><FormVictim /></span></div>
                    </li>
                    <li>
                        <div className="collapsible-header #f57c00 orange darken-2 white-text" onClick={() => handleCollapsibleClick(3)}><i className="material-icons">content_paste</i>HECHOS QUE SE DENUNCIAN</div>
                        <div className={`collapsible-body ${activeCollapsible === 3 ? 'active' : ''}`}><span><FormHechos /></span></div>
                    </li>
                </ul>
            </div>    
    </div>
  )
}

export default Collapsible
