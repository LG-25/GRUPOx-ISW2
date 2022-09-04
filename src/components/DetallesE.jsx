import React from 'react'
import ButtonLink from "./ButtonIns.component"
import { useEffect, useState } from 'react';
const DetallesE=()=>{
    const [txtColor, setTxtColor] = useState('btn btn-success');
    const modColor=()=>{
        setTxtColor= "btn btn-secondary disabled"
    }
    return <div className="row container mt-5">
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
                                <ButtonLink nombre="Registrarse" color={txtColor} onRegis={modColor}></ButtonLink>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col"/>
        </div>
    </div>
}
export default DetallesE;
