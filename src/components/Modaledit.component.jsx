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
                <div class="card" style={{ maxWidth: "1540px" }}>
                    <div class="row g-0">
                    <div className='mt-2 mb-2 ml-2 mr-2'>
                            <label className="form-label">Nombre</label>
                            <input
                                className="form-control"
                                type="text"
                                defaultValue="Ricardo"
                                onChange={txtApellidoOnChange}
                            />
                        </div>
                        <div className='mt-2 mb-2 ml-2 mr-2'>
                            <label className="form-label">Apellido Paterno</label>
                            <input
                                className="form-control"
                                type="text"
                                defaultValue="Ricardo"
                                onChange={txtApellidoOnChange}
                            />
                        </div>
                        <div className='mt-2 mb-2 ml-2 mr-2'>
                            <label className="form-label">Apellido Materno</label>
                            <input
                                className="form-control"
                                type="text"
                                defaultValue="Ricardo"
                                onChange={txtApellidoOnChange}
                            />
                        </div>
                        <div className='mt-2 mb-2 ml-2 mr-2'>
                            <label className="form-label">Correo</label>
                            <input
                                className="form-control"
                                type="text"
                                defaultValue="Ricardo"
                                onChange={txtApellidoOnChange}
                            />
                        </div>
                        <div className='mt-2 mb-2 ml-2 mr-2'>
                            <label className="form-label">Telefono</label>
                            <input
                                className="form-control"
                                type="text"
                                defaultValue="Ricardo"
                                onChange={txtApellidoOnChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col" />
        </div>
    </div>
  };
  export default Modaledit;