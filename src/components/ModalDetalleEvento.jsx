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
    const OpenModal=()=>{
        let co_usr = sessionStorage.getItem("user");
        const fecha = Date.now()
        ParticipantesEvento.CrearParticipanteEvento(props.nro,co_usr,fecha,1)
            .then(
                (response) =>{
                    setOpen(true)
                    console.log(response);
                },
                (error)=>{
                    alert("ha ocurrido al añadir al participante")
                    setOpen(false)
                    console.log(error);
                }
            )
    }
    const onModalClose=()=>{
        setOpen(false)
        window.location.href = '/catalogoEventos';
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
        <div className="card" style={{ maxWidth: "1540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">{props.desc}</p>
                        <p className="card-text">Cantidad de horas: {props.qHoras}</p>
                        <p className="card-text">Ubicación: {props.ubic}</p>
                        <p className="card-text">Cantidad máxima de personas: {props.qPers}</p>
                        <p className="card-text">URL del evento: {props.url}</p>
                        <p className="card-text"><small className="text-muted">Fecha inicio: {props.inicio} </small></p>
                        <p className="card-text"><small className="text-muted">Fecha fin: {props.fin} </small></p>
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
