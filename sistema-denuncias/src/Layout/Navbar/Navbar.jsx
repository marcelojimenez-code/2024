import React from 'react'

const Navbar = () => {
  return (
     <nav className="orange" role="navigation">
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down">
            <li><a href="#">Registro Denuncias</a></li>
            <li><a href="#">Gestor Denuncias</a></li>
            <li><a href="#">Registro CJS</a></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
     </nav>
  )
}

export default Navbar
