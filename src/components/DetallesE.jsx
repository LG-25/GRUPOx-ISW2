import React from 'react'
import ButtonLink from "./ButtonIns.component"
import { useEffect, useState } from 'react';


//Modal con mensaje de confirmación de registro- IMPORT
import {Modal} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import MensajeRegistroEvento from './MensajeRegistroEvento';
//Modal con mensaje de confirmación de registro- FIN IMPORT


//Modal con mensaje de confirmación de registro- ESTILO
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
//Modal con mensaje de confirmación de registro- FIN ESTILO 

const DetallesE = () =>{

    const styless = useStyles();
    const[modal, setModal]= useState(false);
    const OpenCloseModal = () =>{
        setModal(!modal);
    }

    const [txtColor, setTxtColor] = useState('btn btn-success');
    const modColor=()=>{
        setTxtColor= "btn btn-secondary disabled"
    }   
        
    //Modal con mensaje de confirmación de registro
    
    
    
        
    const MODAL = (
        <div className={styless.modal}>
            <div align="center">
                <div className="fs-4 my-4">¡Registro al evento exitoso!</div>
            </div>
                
            <div align="center">
                <button className="btn btn-primary  w-75" onClick={()=>OpenCloseModal()}>Regresar</button>
            </div>
                
        </div>
    ) 
    // fin Modal con mensaje de confirmación de registro   

    

    return( <div className="row container mt-5">
        <div className="row justify-content-center">
            <div className="col" />
            <div className="col-md-5 table-responsive">
                <div class="card" style={{ maxWidth: "1540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Nombre del evento</h5>
                                <p class="card-text">Descripción del evento .............................................................................................................................</p>
                                <p class="card-text"><small class="text-muted">Fecha y Hora: 31/10/2022 14:00 horas</small></p>
                                <ButtonLink nombre="Registrarse" color={txtColor} onRegis={modColor}>   
                                </ButtonLink>
                                
                                
                                <div className = {styless.container}>
                                    <button className="btn btn-primary w-100 text-dark" onClick={()=>OpenCloseModal()} >Registrar</button>
                                    <Modal
                                        open = {modal}
                                        onClose={OpenCloseModal}>
                                        {MODAL}
                                    </Modal>
                                </div>
                                
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col"/>
        </div>
    </div>);
}
export default DetallesE;
