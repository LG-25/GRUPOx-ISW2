//import { Modal, Button } from 'react-bootstrap';
import React from 'react'
import { useEffect, useState } from 'react';
const Modaledit = () => {
    const [txtNombre, setTxtNombre] = useState('');
    const [txtApPaterno, setTxtApPaterno] = useState('');
    const [txtCorreo, setTxtCorreo] = useState(0);
    const [txtTelefono, setTxtTelefono] = useState(0);
    const [txtApMaterno, setTxtApMaterno] = useState('');
  //apellido
  //tabindex
    //useEffect(() => {
      //if (props.cliente != null) {
        
        //setTxtNombre(props.cliente.nombre);
        //setTxtApPaterno(props.cliente.apPaterno);
        //setTxtCorreo(props.cliente.correo);
        //setTxtTelefono(props.cliente.telefono);
        //setTxtApMaterno(props.cliente.apMaterno);
      //}
    //}, [props.cliente]);
  
    const txtNombreOnChange = (event) => {
      setTxtNombre(event.target.value);
    };
    const txtApellidoOnChange = (event) => {
      setTxtApPaterno(event.target.value);
    };
    const txtCorreoOnChange = (event) => {
      setTxtCorreo(event.target.value);
    };
    const txtTelefonoOnChange = (event) => {
      setTxtTelefono(event.target.value);
    };
    const txtApMaternoOnChange = (event) => {
        setTxtApMaterno(event.target.value);
      };
    //const butOnGuardar = () => {
  //props.actualizarCliente(
  //props.cliente.id,
  //txtNombre,
  //txtApPaterno,
  //txtCorreo,
  //txtTelefono,
  //txtApMaterno
  //);
  //};
  //class
  return <div className="row container mt-5">
    <div className="row justify-content-center">
      <div className="col" />
      <div className="col-md-5 table-responsive">
        <aside>
          <div className="card bg-secondary text-black bg-opacity-25">
            <div className="card-body">
              <div className="row">
                <div className="col">

                </div>
                <div className="col">
                  <h2 className="text-center">Datos</h2>
                </div>
                <div className="col">

                </div>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Nombre</label>
                <input type="text" defaultValue="Ricardo" className="form-control" onChange={txtApellidoOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Apellido Paterno</label>
                <input type="text" defaultValue="Ricardo" className="form-control" onChange={txtApellidoOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Apellido Materno</label>
                <input type="text" defaultValue="Ricardo" className="form-control" onChange={txtApellidoOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label" >Correo</label>
                <input type="text" defaultValue="Ricardo" className="form-control" onChange={txtApellidoOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label" >Teléfono</label>
                <input type="text" defaultValue="999999999" className="form-control" onChange={txtApellidoOnChange}/>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col">
                  <button className="btn btn-primary" >Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="col" />
    </div>
  </div>
  };
  export default Modaledit;