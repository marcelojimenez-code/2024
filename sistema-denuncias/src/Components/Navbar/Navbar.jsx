import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }, []);


  const links = [
    {
        id: 1,
        name: 'Registro Denuncias',
        link: 'registro-denuncias'
    },
    {
        id: 2,
        name: 'Registro Denuncias',
        link: 'gestor-denuncias'
    },
    {
        id: 3,
        name: 'Registro CJS',
        link: 'registro-cjs'
    },

] 

  return (
     <nav className="orange" role="navigation">
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down">

          </ul>

          <ul id="nav-mobile" className="sidenav">

          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
     </nav>
  )
}

export default Navbar
