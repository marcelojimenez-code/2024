import React from 'react';
import { Outlet } from "react-router-dom"
import DataTable from '../../pages/Datatable';
import DatatableGestor from '../../pages/DatatableGestor';
import DatatableCJS from '../../pages/DatatableCJS';
import Navbar from '../../Components/Navbar/Navbar';


const Main = () => {
  return (
    <>
    <Navbar />

    <div className="espaciado">
      <div className="row">
        <DataTable />
        <DatatableGestor />
        <DatatableCJS />
      </div>
    </div>
    </>
  );
};

export default Main;