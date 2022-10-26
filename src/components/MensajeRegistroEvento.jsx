

import {useState} from "react";
import {Modal} from '@material-ui/core';
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
    
    
const MensajeRegistroEvento = ()=>{

    
    /*Modal*/
    const styless = useStyles();
    const[modal, setModal]=useState(false);
    const OpenCloseModal = () =>{
        setModal(!modal);
    }
    /*Cuerpo del modal*/
      const MODAL=(
        <div className={styless.modal}>
            <div align="center">
                <div className="fs-4 my-4">¡Registro al evento exitoso!</div>
            </div>
                
            <div align="center">
                <button className="btn btn-primary  w-75" onClick={()=>OpenCloseModal()}>Regresar</button>
            </div>
            
        </div>
      ) 
    /*Para ingresar al modal*/
    return(
    <div className = {styless.container}>
        <div className="btn btn-primary w-100 text-dark" onClick={()=>OpenCloseModal()} >Registrar</div>
        <Modal
            open = {modal}
            onClose={OpenCloseModal}>
            {MODAL}
        </Modal>
    </div>
    );
    
}

export default MensajeRegistroEvento;

