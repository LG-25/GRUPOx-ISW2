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
    
const ModalEditar = (props)=>{

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
}

export default ModalEditar;