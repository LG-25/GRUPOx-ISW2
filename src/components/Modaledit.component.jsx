//import { Modal, Button } from 'react-bootstrap';
import React from 'react'
import { useEffect, useState } from 'react';
import { ServiciosUsuarioI } from '../services/ServiciosUsuario.js';
import ModalMensaje from './ModalMensaje';
const Modaledit = (props) => {
    const usuario = props.user;

    const v1= usuario.nom_usr;
    const [txtNombre, setTxtNombre] = useState('');
    const [txtAp_pat, setTxtApPaterno] = useState('');
    const [txtAp_ma, setTxtAp_ma] = useState('');
    const [txtCorreo, setTxtCorreo] = useState('');
    const [txtContra, setTxtContra] = useState('');
    const [txtNom, setTxtNom] = useState('');
    const [txtFN, setTxtFN] = useState('');
    const [txtFC, setTxtFC] = useState('');
    const [openModal, setOpenModal]= useState(false);
    useEffect(() => {
      if (usuario.co_usr_inv != null) {
        setTxtNombre(usuario.nom_usr);
        setTxtApPaterno(usuario.ap_pat);
        setTxtAp_ma(usuario.ap_mat);
        setTxtCorreo(usuario.correo);
        setTxtContra(usuario.contra);
        setTxtNom(usuario.nom);
        setTxtFN(usuario.fh_nacimiento);
        setTxtFC(usuario.fh_creacion);
      }
    }, [usuario.co_usr_inv])
  
    const txtNombreOnChange = (event) => {
      setTxtNombre(event.target.value);
    };
    const txtAp_patOnChange = (event) => {
      setTxtApPaterno(event.target.value);
    };
    const txtAp_maOnChange = (event) => {
      setTxtAp_ma(event.target.value);
    };
    const txtCorreoOnChange = (event) => {
      setTxtCorreo(event.target.value);
    };
    const txtContraOnChange = (event) => {
      setTxtContra(event.target.value);
      };
    const btnGuardarOnclick= ()=>{
      

      console.log("nombre: "+ txtNombre);
      console.log("nombre: "+ txtAp_pat);
      console.log("nombre: "+ txtAp_ma);
      console.log("nombre: "+ txtCorreo);
      console.log("nombre: "+ txtContra);

      //btnConfirmarOnClick()
      setOpenModal(true);
    }
    const btnConfirmarOnClick=()=>{
        const usr={
                NOM_USR: objeto.nom_usr,
                CORREO: objeto.correo,
                CONTRA: objeto.contra,
                NOM: objeto.nom,
                AP_PAT: objeto.ap_pat,
                AP_MAT: objeto.ap_mat,
                FH_NACIMIENTO: objeto.fh_nacimiento,
                FH_CREACION: objeto.fh_creacion
      };
      //dirigir a principal
      ServiciosUsuarioI.updateUsuarioI(usr).then( () => {
        window.location.href = '/InicioUsuario';
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