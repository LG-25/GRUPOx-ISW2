import React from 'react'
import ButtonLink from "./ButtonIns.component"
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
const ModalDetalleEvento = (props) => {
    const [txtColor, setTxtColor] = useState('btn btn-success');
    const modColor=()=>{
        setTxtColor= "btn btn-secondary disabled"
    }
    return <Modal show = {props.mostrar} onHide={props.ocultar}>
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
                        <ButtonLink nombre="Registrarse" color={txtColor} onRegis={modColor}></ButtonLink>
                    </div>
                    
                </div>
            </div>
        </div>

    </Modal>
};
export default ModalDetalleEvento
