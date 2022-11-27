import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';  
import { Sidebar } from '../components/Sidebar.jsx';
import InvitacionLink from "./InvitacionLink.jsx";

const FormularioEvento=()=>{
    
    
    const validarInfoEvento = () =>{
        if(NO_EVNT === "") return false
        if(FH_INICIO === "") return false
        if(FH_FIN === "") return false
        if(FG_VIG === null) return false 
        return true; 
    }
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
        FG_VIG: null
    })

    const { NO_EVNT, QT_PERS, QT_HRS, DESC_EVENT, UBIC, FH_INICIO, FH_FIN, URL_EVNT, URL_FOTO, FG_VIG } = datos;

    const onInputChange = e =>{
        console.log(datos);
        setDatos({
            ...datos,[e.target.name]: e.target.value 
        })
    }
    
    const onSubmit = async e => {

        if (!validarInfoEvento()){
            alert("Falta información para completar")
            return false; 
        }

        let co_usr = sessionStorage.getItem("userEN")
        /*Para agregar el evento dentro de la base de datos y se agregue en el catalogo*/  
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/usuarios/${co_usr}`,{
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
        if(response.ok){
            alert("Se ha subido correctamente el evento :)")
            window.location.href = '/misEventos'
        }
        const dato = await response.json();
    };
    return(
        <div className ="row">
            <div className="col-md-9">   
                <div className="container-fluid p-5 ">
                    
                    <h1>¡Registra tu evento!</h1>
                    
                    {/*Datos NO_EVNT, QT_PERS,QT_HRS,DESC_EVENT,UBIC,FH_INICIO,FH_FIN,URL_EVNT,URL_FOTO,FG_VIG */}
                    <div className="row">
                        <h3 class="mt-4"><em>Datos del evento</em></h3>
                        <div className="mt-2">
                            <input type="text" className="form-control my-2" placeholder="Nombre del Evento" name="NO_EVNT" value={NO_EVNT}  onChange={e => onInputChange(e)}></input>
                        </div>
                        <div className="mt-1">
                            <input type="number" className="form-control my-2" placeholder="Cantidad de personas" name="QT_PERS" value={QT_PERS}  onChange={e => onInputChange(e)}></input>
                        </div>
                        <div className="mt-1">
                            <input type="number" className="form-control my-2" placeholder="Duración del evento" name="QT_HRS" value={QT_HRS} onChange={e => onInputChange(e)}></input>
                        </div>
                        <div className="mt-1">
                            <textarea className="form-control my-2" placeholder="Descripción del evento" rows="8" col="53" name="DESC_EVENT" value={DESC_EVENT} onChange={e => onInputChange(e)}></textarea>
                        </div>     
                        <div className="mt-1">
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
                        
                        <h5 className="mt-2">Vigencia del Evento</h5>
                        <div class="form-check mt-2 mx-4">
                            <input id="activo" class="form-check-input" type="radio" name="FG_VIG" value={true} onChange={e => onInputChange(e)}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Evento vigente
                            </label>
                        </div>
                        <div class="form-check mx-4">
                            <input id="inactivo" class="form-check-input" type="radio" name="FG_VIG" value={false} onChange={e => onInputChange(e)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Evento cancelado
                            </label>
                        </div>

                        <div className="text-center my-2">
                            <button className="btn btn-primary" onClick={e => onSubmit(e)}>Registrar</button>
                        </div>
                        
                         <div className="mt-5 mb-5">
                            <InvitacionLink/>
                        </div>
                    </div>

                </div>
            </div>
            
        </div> 
        </div>
    )
}

    export default FormularioEvento;