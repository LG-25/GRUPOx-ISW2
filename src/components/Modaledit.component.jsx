//import { Modal, Button } from 'react-bootstrap';
import React from 'react'
import { useEffect, useState } from 'react';
import { GestorUsuarios } from '../services/ServiciosUsuario.js';
import ModalMensaje from './ModalMensaje';
const Modaledit = (props) => {
    const usuario = props.user;

    const gestorUsuarios = new GestorUsuarios()
    const [txtNombre, setTxtNombre] = useState('');
    const [txtAp_pat, setTxtApPaterno] = useState('');
    const [txtAp_ma, setTxtCorreo] = useState(0);
    const [txtCorreo, setTxtTelefono] = useState(0);
    const [txtContra, setTxtApMaterno] = useState('');
    const [openModal, setOpenModal]= useState(false);
    
  
    const txtNombreOnChange = (event) => {
      setTxtNombre(event.target.value);
    };
    const txtAp_patOnChange = (event) => {
      setTxtApPaterno(event.target.value);
    };
    const txtAp_maOnChange = (event) => {
      setTxtCorreo(event.target.value);
    };
    const txtCorreoOnChange = (event) => {
      setTxtTelefono(event.target.value);
    };
    const txtContraOnChange = (event) => {
        setTxtApMaterno(event.target.value);
      };
    const btnGuardarOnclick= ()=>{
      setOpenModal(true);
    }
    const btnConfirmarOnClick=()=>{
      gestorUsuarios.actualizarUsuarioI(10, [txtNombre, txtAp_pat, txtAp_ma, txtCorreo, txtContra]);
    }

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
                <div className="col-8">
                  <h2 className="text-center">Editar mis datos</h2>
                </div>
                <div className="col">

                </div>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Nombre</label>
                <input type="text" defaultValue={usuario.nom_usr} className="form-control" onChange={txtNombreOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Apellido paterno</label>
                <input type="text" defaultValue={usuario.ap_pat} className="form-control" onChange={txtAp_patOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Apellido materno</label>
                <input type="text" defaultValue={usuario.ap_mat} className="form-control" onChange={txtAp_maOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Correo electrónico</label>
                <input type="text" defaultValue={usuario.correo} className="form-control" onChange={txtCorreoOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Contraseña</label>
                <input type="text" defaultValue={usuario.contra} className="form-control" onChange={txtContraOnChange}/>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col">
                  <button className="btn btn-primary" onClick={btnGuardarOnclick}>Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="col" />
    </div>
    {openModal && <ModalMensaje closeModal={setOpenModal} confirmar={btnConfirmarOnClick}></ModalMensaje>}
  </div>
  
  };
  export default Modaledit;