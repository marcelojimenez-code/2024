import React from 'react'
import './Header.css' 
import Logo from '../../../public/img/logo_cn.jpg'
 
 const Header = ({title}) => {
   
   return (

                <header className="header-custom">
                    <div className="col s4 left-column">
                    <img src={Logo} className="responsive-img imagen" alt="logo_cn" />
                    </div>
                    
                    <div className="col s2 center-column"></div>
                    
                    <div className="col s6 right-column">
                    <h3 className="title">{title}</h3>
                    </div>
                </header>

   )
 }
 
 export default Header
 