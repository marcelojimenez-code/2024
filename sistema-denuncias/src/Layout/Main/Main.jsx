import React from 'react';
import DataTable from '../../Components/Datatable/Datatable';
import MenuLeft from '../../Components/MenuLeft/MenuLeft';
import DatatableGestor from '../../Components/Datatable/DatatableGestor';
import DatatableCJS from '../../Components/Datatable/DatatableCJS';
import './Main.css'


const Main = () => {
  return (
    <div className="espaciado">
      <div className="row">
        <DataTable />
        <DatatableGestor />
        <DatatableCJS />
      </div>
    </div>
  );
};

export default Main;
