import React, { useState, useEffect } from "react"
import { Evento } from '../services/ServiciosEvento'
import ModalEditar from "./ModalEditar";


const ModificarEvento = (props) => {
    
    const [data , setdata] = useState({});
    
    //Para obtener la data nueva a actualizar
    const[edita, setEdita] = useState("");

    //Para obtener los datos de un evento a modificar
    useEffect(() => {
        Evento.ObtenerEvento(props.NU_EVNT)
            .then(result => {
                setdata(result);
            })
    }, [])

    /*const[subirHistoria, setSubirHistoria] = useState({
        NO_ESPC: "",
        CO_PAC: null,
        NO_MED:"",
        MEDICINAS:"",
        DIAG: "",
        HISTORIA_DESC:""
    });

    const {NO_ESPC, CO_PAC, NO_MED, MEDICINAS, DIAG, HISTORIA_DESC} = subirHistoria;*/

    const onInputChange = e =>{
        setEdita({
            ...edita, [e.target.name]: e.target.value
        })
    }

    Evento.update = async e => {
        await fetch("https://genium-backend.herokuapp.com/eventos/",{
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    no_event     : edita["no_evnt"], 
                    QT_PERS     : edita["qt_pers"],  
                    QT_HRS      : edita["qt_hrs"],   
                    DESC_EVENT  : edita["desc_event"],
                    UBIC        : edita["ubic"],     
                    FH_INICIO   : edita["fh_inicio"],
                    FH_FIN      : edita["fh_fin"],   
                    URL_EVNT    : edita["url_evnt"], 
                    FG_VIG      : edita["fg_vig"],
                    URL_FOTO    : edita["url_foto"]
                }
            )
        })
    }
    console.log(props);
    console.log(data);
    console.log(data.fh_inicio);

    /*var f = data.fh_inicio;
    let fecha = f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear();

    var ff = data.fh_inicio;
    console.log(ff);
    let fechaF = f.slice(0,10);
    console.log(fechaF);

    if(data.fg_vig == 0){*/

    
    return (
       <div>
            <div className ="row">
            <div className="col-md-9">   
                <div className="container-fluid p-5 ">
                    
                    <h1>Modifica los datos del evento</h1>
                    <div className="row">
                        <h3 class="mt-4"><em>Datos del evento</em></h3>
                        
                       <label class="form-label mt-1">Nombre del Evento</label>
                        <div className="mt-2">
                            <input type="text" className="form-control my-2" placeholder={data.no_evnt} name="no_evnt" value={no_event}  onChange={e => onInputChange(e)}></input>
                        </div>
                        
                        <label class="form-label mt-1">Cantidad de personas</label>
                        <div className="mt-1">
                            <input type="text" className="form-control my-2" placeholder={data.qt_pers} name="qt_pers" value={qt_pers}  onChange={e => onInputChange(e)}></input>
                        </div>

                        <label class="form-label mt-1">Duración del evento</label>
                        <div className="mt-1">
                            <input type="text" className="form-control my-2" placeholder={data.qt_hrs} name="qt_hrs" value={qt_hrs} onChange={e => onInputChange(e)}></input>
                        </div>

                        <label class="form-label my-1">Descripción del evento</label>
                        <div className="mt-1">
                            <textarea className="form-control my-2" placeholder={data.desc_event} rows="8" col="53" name="desc_evnt" value={desc_event} onChange={e => onInputChange(e)}></textarea>
                        </div>   

                        <div className="mt-1">
                            <label class="form-label mt-1">Nombre del Evento</label>
                            <div className="col">
                                <input type="text" className="form-control my-2" placeholder={data.ubic} name="ubic" value={ubic} onChange={e => onInputChange(e)}></input>
                            </div>

                            
                            <label class="form-label mt-1">Fecha de Inicio</label>
                            <div className="col mt-2"></div>
                                <input type="date" name="fh_inicio" className="form-control my-2" placeholder={data.fh_inicio} value={fh_inicio} onChange={e => onInputChange(e)}/>
                        </div>

                        <label class="form-label mt-1">Fecha de Fin</label>
                        <div className="col mt-2"> 
                            <input type="date" name="fh_fin" className="form-control my-2" value={fh_fin} onChange={e => onInputChange(e)}/>
                        </div>

                        <label class="form-label mt-1">URL del evento</label>
                        <div>                            
                            <input type="text" name="url_evnt" className="form-control my-2" placeholder={data.url_evnt} value={url_evnt} onChange={e => onInputChange(e)}/>
                        </div>

                        <label class="form-label mt-1">URL de las fotos</label>
                        <div>    
                            <input type="text" name="URL_FOTO" className="form-control my-2" placeholder={data.url_foto} value={url_foto} onChange={e => onInputChange(e)}/>
                        </div>
                        
                        <h5 className="mt-2">Vigencia del Evento</h5>
                
                        <div class="form-check mt-2 mx-4">
                            <input class="form-check-input" type="radio" name="fg_vig" value={fg_vig} onChange={e => onInputChange(e)}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Evento vigente
                            </label>
                        </div>
                        
                        <div class="form-check mx-4">
                            <input class="form-check-input" type="radio" name="fg_vig" value={data.fg_vig} onChange={e => onInputChange(e)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Evento cancelado
                            </label>
                        </div>

                        {/*Boton de modal de modificacion exitosa : ModalEditar
                          Onclick deberia de permitir funcion de update*/}
                        <div className="text-center my-2">
                            <ModalEditar onClick={Evento.update()}></ModalEditar>
                        </div>
                        
                    </div>

                </div>
            </div>
            </div> 
        </div>
    )
}



export default ModificarEvento