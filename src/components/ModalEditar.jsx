import React from "react";
import { useState} from "react";
import {Modal, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


    /*Estilo Modal*/
    const useStyles=makeStyles((theme)=>({
        modal:{
          position:'absolute',
          width:400,
          backgroundColor:'white',
          padding: theme.spacing(2,4,3,4),
          top:'50%',
          left:'50%',
          transform:'translate(-50%,-50%)',
        },
        textfield:{
          width:'100%'
        },
        
        container:{
            textAlign: 'center'
        }
      }))
    
    
const ModalEditar = ()=>{

    
    const styless = useStyles();
    const[modal, setModal]=useState(false);
    const OpenCloseModal = () =>{
        setModal(!modal);
    }
    /*MODAL*/
      const MODAL=(
        <div className={styless.modal}>
            <div align="center">
                <h4 className="text-color2 fw-bold">Se han actualizado los datos del evento de forma exitosa.</h4>
            </div>
        </div>
      ) 
    /*Boton ingreso al modal*/
    return(
    <div className = {styless.container}>
        <button className="btn btn-primary text-light" onClick={()=>OpenCloseModal()}>Actualizar datos</button>
        <Modal
            open = {modal}
            onClose={OpenCloseModal}>
            {MODAL}
        </Modal>
    </div>
    );
    
}

export default ModalEditar;