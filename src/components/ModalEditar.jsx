import React from "react";
import { useState} from "react";
import {Modal, Button} from '@material-ui/core';



const ModalMensaje = (props)=>{
    
  return(
      <div className="modalBackground">
          <div className="modalContainer">
              <div className="titleCloseBtn">
                  <button onClick={()=>props.closeModal(false)}> X </button>
              </div>
              <div className="body">
                  <p>
                      Se registrarán los cambios realizados
                  </p>
              </div>
              <div className="footer">
                  <button id="cancelBtn" onClick={()=>props.closeModal(false)}>Cancelar</button>
                  <button onClick={()=>props.confirmar()}>Confirmar</button>
              </div>
          </div>
      </div>
  )
  
}   
    
const ModalEditar = ()=>{

    return(
      <div className="modalBackground">
          <div className="modalContainer">
              <div className="titleCloseBtn">
                  <button onClick={()=>props.closeModal(false)}> Cerrar </button>
              </div>
              <div className="body">
                  <p>Se han actualizado los datos del evento de forma exitosa</p>
              </div>
              <div className="footer">
                  <button id="cancelBtn" onClick={()=>props.closeModal(false)}>Cancelar</button>
                  <button onClick={()=>props.confirmar()}>Confirmar</button>
              </div>
          </div>
      </div>
    );
    /*const styless = useStyles();
    const[modal, setModal]=useState(false);
    const OpenCloseModal = () =>{
        setModal(!modal);
    }
    /*MODAL
      const MODAL=(
        <div className={styless.modal}>
            <div align="center">
                <h4 className="text-color2 fw-bold">Se han actualizado los datos del evento de forma exitosa.</h4>
            </div>
        </div>
      ) 
    /*Boton ingreso al modal
    return(
    <div className = {styless.container}>
        <button className="btn btn-primary text-light" onClick={()=>OpenCloseModal()}>Actualizar datos</button>
        <Modal
            open = {modal}
            onClose={OpenCloseModal}>
            {MODAL}
        </Modal>
    </div>
    );*/
    
}

export default ModalEditar;