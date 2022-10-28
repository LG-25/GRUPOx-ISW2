import React from 'react'
import ButtonLink from "./ButtonIns.component"
import { useEffect, useState } from 'react';


//Modal con mensaje de confirmación de registro- IMPORT
//import {Modal} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
//Modal con mensaje de confirmación de registro- FIN IMPORT

import { Modal } from 'react-bootstrap';

//Registro de participantes
import { ParticipantesEvento } from '../services/ServiciosParticipanteEvento';

//Modal con mensaje de confirmación de registro- ESTILO
    
//Modal con mensaje de confirmación de registro- FIN ESTILO 

const ModalDetalleEvento = (props) => {
    const [txtColor, setTxtColor] = useState('btn btn-success');
    const [open, setOpen]=useState(false)
    const modColor = () => {
        setTxtColor = "btn btn-secondary disabled"
    }
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
    const [data, setdata] = useState({});
    //Registro de participantes
    // useEffect(()=>{
    //     ParticipantesEvento.crearParticipanteEvento()
    //     .then(result=>{
    //         setdata(result);
    //     })
    // },[])

    //Modal con mensaje de confirmación de registro {styless.modal} styless.container
    
    //const styless = useStyles();
    const[modal, setModal]=useState(false);
    const OpenCloseModal = () =>{
        setOpen(false);
    } 
<<<<<<< HEAD
    const OpenModal=()=>{
        setOpen(true)
    }
    const onModalClose=()=>{
        setOpen(false)
    }

    //const MODAL = (
       
    //) 
    // fin Modal con mensaje de confirmación de registro   

    /*
    <div className = {styless.container}>
        <button className="btn btn-primary w-100 text-dark" onClick={()=>OpenCloseModal()} >Registrarse</button>
        <Modal
            open = {modal}
            onClose={OpenCloseModal}>
            {MODAL}
        </Modal>
    </div>
    
    */
    


    return <Modal show = {props.mostrar} onHide={props.ocultar}>
=======
    const LAfuncion = () =>{
        const fecha = Date.now()
        let cod = sessionStorage.getItem("userEN");
        if (cod === null) {
            cod = 1;
        }
        ParticipantesEvento.CrearParticipanteEvento(props.nu_evnt,cod,fecha,1)
        OpenCloseModal()

    }
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

    return <Modal show = {props.mostrar} onHide={props.ocultar} open={modal}>
>>>>>>> 67757f264a89492d0a435e3f6c709de0b0d02b06
        <div class="card" style={{ maxWidth: "1540px" }}>
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.nombre}</h5>
                        <p class="card-text">{props.desc}</p>
                        <p class="card-text">Cantidad de horas: {props.qHoras}</p>
                        <p class="card-text">Ubicación: {props.ubic}</p>
                        <p class="card-text">Cantidad máxima de personas: {props.qPers}</p>
                        <p class="card-text">URL del evento: {props.url}</p>
                        <p class="card-text"><small class="text-muted">Fecha inicio: {props.inicio} </small></p>
                        <p class="card-text"><small class="text-muted">Fecha fin: {props.fin} </small></p>
                        <div className = {""}>
                            <button className="btn btn-primary w-100 text-dark" onClick={OpenModal} >Registrarse</button>
                            <Modal
                                show={open} 
                                onHide={onModalClose}
                                >
                                 <div className="">
                                    <div align="center">
                                        <div className="fs-4 my-4">¡Registro al evento exitoso!</div>
                                    </div>
                                        
                                    <div align="center">
                                        <button className="btn btn-primary  w-75" onClick={onModalClose}>Regresar</button>
                                    </div>
                                        
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Modal>


};
export default ModalDetalleEvento
