import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';  

const FormularioEvento=()=>{
    
    const [datos, setDatos] = useState({
        NO_EVNT: "", 
        QT_PERS: "", 
        QT_HRS: "", 
        DESC_EVENT: "", 
        UBIC: "", 
        FH_INICIO: "", 
        FH_FIN: "",
        URL_EVNT: "",
        URL_FOTO: "",
        FG_VIG: ""
    })

    const { NO_EVNT, QT_PERS, QT_HRS, DESC_EVENT, UBIC, FH_INICIO, FH_FIN, URL_EVNT, URL_FOTO, FG_VIG } = datos;

    const onInputChange = e =>{
        console.log(datos);
        setDatos({
            ...datos, [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = async e => {
        
        const response = await fetch(``,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    NO_EVNT: datos["NO_EVNT"], 
                    QT_PERS: datos["QT_PERS"], 
                    QT_HRS: datos["QT_HRS"], 
                    DESC_EVENT: datos["DESC_EVENT"], 
                    UBIC: datos["UBIC"], 
                    FH_INICIO: datos["FH_INICIO"], 
                    FH_FIN: datos["FH_FIN"],
                    URL_EVNT: datos["URL_EVNT"],
                    URL_FOTO: datos["URL_FOTO"],
                    FG_VIG: datos["FG_VIG"]
                }
            )
        })
        const dato = await response.json();
        
        await fetch(``,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    NU_EVNT: dato.NU_EVNT
                }
            )
        })
    };
    return(
        <div className="container-fluid p-5 my-5">
            <h1>¡Registra tu evento!</h1>
            
            {/*
                    NO_EVNT: datos["NO_EVNT"], 
                    QT_PERS: datos["QT_PERS"], 
                    QT_HRS: datos["QT_HRS"], 
                    DESC_EVENT: datos["DESC_EVENT"], 
                    UBIC: datos["UBIC"], 
                    FH_INICIO: datos["FH_INICIO"], 
                    FH_FIN: datos["FH_FIN"],
                    URL_EVNT: datos["URL_EVNT"],
                    URL_FOTO: datos["URL_FOTO"],
                    FG_VIG: datos["FG_VIG"] */}
            <div className="row">
                <h3 class="mt-4"><em>Datos del evento</em></h3>
                <div className="mt-2">
                    <input type="text" className="form-control my-2" placeholder="Nombre del Evento" name="NO_EVNT" value={NO_EVNT}  onChange={e => onInputChange(e)}></input>
                </div>
                <div className="mt-1">
                    <input type="text" className="form-control my-2" placeholder="Cantidad de personas" name="QT_PERS" value={QT_PERS}  onChange={e => onInputChange(e)}></input>
                </div>
                <div className="mt-1">
                    <input type="text" className="form-control my-2" placeholder="Duración del evento" name="QT_HRS" value={QT_HRS} onChange={e => onInputChange(e)}></input>
                </div>
                <div className="mt-1">
                    <textarea className="form-control my-2" placeholder="Descripción del evento" rows="8" col="53" name="DESC_EVENT" value={DESC_EVENT} onChange={e => onInputChange(e)}></textarea>
                </div>     
                <div className="">
                    <input type="text" className="form-control my-2" placeholder="Ubicación del evento" name="UBIC" value={UBIC} onChange={e => onInputChange(e)}></input>
                </div>
                <div className="col mt-2">
                    <label class="form-label mt-1">Fecha de Inicio</label>
                    <input type="date" name="FH_INICIO" className="form-control my-2" value={FH_INICIO} onChange={e => onInputChange(e)}/>
                </div>
                <div className="col mt-2"> 
                    <label class="form-label mt-1">Fecha de Fin</label>
                    <input type="date" name="FH_FIN" className="form-control my-2" value={FH_FIN} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    <input type="text" name="URL_EVNT" className="form-control my-2" placeholder="URL del evento" value={URL_EVNT} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                <input type="text" name="URL_FOTO" className="form-control my-2" placeholder="URL de las fotos" value={URL_FOTO} onChange={e => onInputChange(e)}/>
                </div>
                <div className="text-center my-2">
                    <button className="btn btn-primary">Registrar</button>
                </div>
                
            </div>

        </div>
    )
}

    export default FormularioEvento;