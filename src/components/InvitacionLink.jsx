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
    
    
const InvitacionLink = ()=>{

    
    const styless = useStyles();
    const[modal, setModal]=useState(false);
    const OpenCloseModal = () =>{
        setModal(!modal);
    }
    /*MODAL*/
      const MODAL=(
        <div className={styless.modal}>
            <div align="center">
                <h4 className="text-color2 fw-bold">Invita a participantes a tu evento!</h4>
            </div>
            <div className="mt-1">
               <input type="text" className="form-control my-2" placeholder="Nombre del evento" name="Titulo Evento"></input>
            </div>
            <div className="mt-1">
                <textarea className="form-control my-2" placeholder="Descripción del evento" rows="8" col="53" name="DESC_EVENT"></textarea>
            </div>     
            <div className="mt-1">
                <input type="text" className="form-control my-2" placeholder="Link del evento" name="Link" ></input>
            </div>
            <div className="mt-1">
                <input type="text" className="form-control my-2" placeholder="Correo del participante(s)" name="Correo" ></input>
            </div>
            <div align="center">
                <button className="btn btn-primary color-item3 w-75" onClick={()=>OpenCloseModal()}>ENVIAR</button>
            </div>
            
        </div>
      ) 
    /*Boton ingreso al modal*/
    return(
    <div className = {styless.container}>
        <button className="btn btn-primary text-light" onClick={()=>OpenCloseModal()}>INVITA PARTICIPANTES</button>
        <Modal
            open = {modal}
            onClose={OpenCloseModal}>
            {MODAL}
        </Modal>
    </div>
    );
    
}

export default InvitacionLink;