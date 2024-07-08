import React from 'react';
import { Outlet } from "react-router-dom"
import Navbar from '../Navbar/Navbar';


const Layout = () => {
  return (
    <>
        <Navbar />

        <div className="espaciado">
            <div className="row">
                    <Outlet />
            </div>
        </div>
    </>
  );
};

export default Layout;