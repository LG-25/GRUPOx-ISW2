import React from 'react'
import { useEffect, useState } from 'react';
import { Usuario } from '../classes/Usuario.js';
import { UsuarioInvitado } from '../classes/UsuarioInvitado.js';
import { ServiciosUsuarioI } from '../services/ServiciosUsuario.js';
import ModalMensaje from './ModalMensaje';
const ModaleditE = (props) => {
    const usuario = props.user;

    const v1= usuario.nom_usr;
    const [txtNombre, setTxtNombre] = useState('');
    const [txtCorreo, setTxtCorreo] = useState('');
    const [txtContra, setTxtContra] = useState('');
    const [txtNom, setTxtNom] = useState('');
    const [txtFC, setTxtFC] = useState('');
    const [txtPais, setTxtPais] = useState('');
    const [txtRuc, setTxtRuc] = useState(0);
    
    const [openModal, setOpenModal]= useState(false);
    useEffect(() => {
      if (usuario.co_usr != null) {
        setTxtNombre(usuario.nom_usr);
        setTxtCorreo(usuario.correo);
        setTxtContra(usuario.contra);
        setTxtNom(usuario.nom);
        setTxtFC(usuario.fh_creacion);
        setTxtPais(usuario.pais);
        setTxtRuc(usuario.ruc)
      }
    }, [usuario.co_usr])
  
    const txtNombreOnChange = (event) => {
      setTxtNombre(event.target.value);
    };
    const txtCorreoOnChange = (event) => {
      setTxtCorreo(event.target.value);
    };
    const txtContraOnChange = (event) => {
      setTxtContra(event.target.value);
    };
    const txtNomOnChange = (event) => {
        setTxtNom(event.target.value);
    };

    const btnGuardarOnclick= ()=>{

      //btnConfirmarOnClick()
      setOpenModal(true);
    }
    const btnConfirmarOnClick=()=>{
      const usr= new Usuario(
        usuario.co_usr,
        txtNombre,
        txtCorreo,
        txtContra,
        txtNom,
        txtFC,
        txtPais,
        txtRuc
      );
      console.log("pais: "+ usuario.pais);
      console.log("correo: "+ usuario.correo);
      console.log("usuarioE: " + JSON.stringify(usr));

      //dirigir a principal
      ServiciosUsuarioI.updateUsuarioE(usr).then( () => {
        window.location.href = '/InicioEntidad';
      })
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
                <label for="" className="form-label">Nombre de usuario</label>
                <input type="text" defaultValue={usuario.nom_usr} className="form-control" onChange={txtNombreOnChange}/>
              </div>
              <div className="input-group-sm mb-2">
                <label for="" className="form-label">Nombre</label>
                <input type="text" defaultValue={usuario.nom} className="form-control" onChange={txtNomOnChange}/>
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
  export default ModaleditE;