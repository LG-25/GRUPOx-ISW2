import React, { useState, useEffect } from "react"
import { Evento } from '../services/ServiciosEvento'
import ModalEditar from "./ModalEditar";


const ModificarEvento = (props) => {
    
    const [data , setdata] = useState({});
    
    
    //Para obtener la data nueva a actualizar
    const[edita, setEdita] = useState("");

    //Para obtener los datos de un evento a modificar
    useEffect(() => {
        Evento.ObtenerEvento(props.no_evnt)
            .then(result => {
                setdata(result);
            })
    }, [])

    const onInputChange = e =>{
        setEdita({
            ...edita, [e.target.name]: e.target.value
        })
    }
    
    Evento.update = async e => {
        e.preventDefault();
        await fetch("https://genium-backend.herokuapp.com/eventos",{
            method: "PUT",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {   

                    nu_event     : edita["nu_evnt"], 
                    qt_pers     : edita["qt_pers"],  
                    qt_hrs      : edita["qt_hrs"],   
                    desc_event  : edita["desc_event"],
                    ubic        : edita["ubic"],     
                    fh_inicio   : edita["fh_inicio"],
                    fh_fin      : edita["fh_fin"],   
                    url_evnt    : edita["url_evnt"], 
                    fg_vig      : edita["fg_vig"],
                    url_foto    : edita["url_foto"]
                }
            )
        })
    }
   
/*Realizamos llamadas de prueba para verificar que se llamen los datos del evento*/
    console.log(props);
    console.log(data);
    console.log(data.fh_inicio);

    const diaIni = new Date(evento.fh_inicio)
    const diaFin = new Date(evento.fh_fin)

    

    
    return (
       <div>
            <div className ="row">
            <div className="col-md-9">   
                <div className="container-fluid p-5 ">
                    
                    <h1>Modifica los datos del evento</h1>
                    <div className="row">
                        <h3 class="mt-4"><em>Datos del evento</em></h3>
                        {/*Para cada dato existe:
                            placeholder: muestra la data actual del evento llamado
                            value: guarda la nueva data ingresada
                            onChange: captura los cambios realizados en los campos de los datos
                        */}
                        
                       <label class="form-label mt-1">Nombre del Evento</label>
                        <div className="mt-2">
                            <input type="text" className="form-control my-2" placeholder={data.nu_evnt} name="nu_evnt" value={edita.nu_event}  onChange={e => onInputChange(e)}>{data.nu_evnt}</input>
                        </div>
                        
                        <label class="form-label mt-1">Cantidad de personas</label>
                        <div className="mt-1">
                            <input type="text" className="form-control my-2" placeholder={data.qt_pers} name="qt_pers" value={edita.qt_pers}  onChange={e => onInputChange(e)}></input>
                        </div>

                        <label class="form-label mt-1">Duración del evento</label>
                        <div className="mt-1">
                            <input type="text" className="form-control my-2" placeholder={data.qt_hrs} name="qt_hrs" value={edita.qt_hrs} onChange={e => onInputChange(e)}></input>
                        </div>

                        <label class="form-label my-1">Descripción del evento</label>
                        <div className="mt-1">
                            <textarea className="form-control my-2" placeholder={data.desc_event} rows="8" col="53" name="desc_evnt" value={edita.desc_event} onChange={e => onInputChange(e)}></textarea>
                        </div>   

                        <div className="mt-1">
                            <label class="form-label mt-1">Ubicacion del evento</label>
                            <div className="col">
                                <input type="text" className="form-control my-2" placeholder={data.ubic} name="ubic" value={edita.ubic} onChange={e => onInputChange(e)}>{data.ubic}</input>
                            </div>

                            
                            <label class="form-label mt-1">Fecha de Inicio</label>
                            <div className="col mt-2"></div>
                                <input type="date" name="fh_inicio" className="form-control my-2" placeholder={diaIni.toLocaleDateString()} value={edita.fh_inicio} onChange={e => onInputChange(e)}/>
                        </div>

                        <label class="form-label mt-1">Fecha de Fin</label>
                        <div className="col mt-2"> 
                            <input type="date" name="fh_fin" className="form-control my-2" value={diaFin.toLocaleDateString()} onChange={e => onInputChange(e)}/>
                        </div>

                        <label class="form-label mt-1">URL del evento</label>
                        <div>                            
                            <input type="text" name="url_evnt" className="form-control my-2" placeholder={data.url_evnt} value={edita.url_evnt} onChange={e => onInputChange(e)}/>
                        </div>

                        <label class="form-label mt-1">URL de las fotos</label>
                        <div>    
                            <input type="text" name="URL_FOTO" className="form-control my-2" placeholder={data.url_foto} value={edita.url_foto} onChange={e => onInputChange(e)}/>
                        </div>
                        
                        <h5 className="mt-2">Vigencia del Evento</h5>
                
                        <div class="form-check mt-2 mx-4">
                            <input class="form-check-input" type="radio" name="fg_vig" value={edita.fg_vig} onChange={e => onInputChange(e)}/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Evento vigente
                            </label>
                        </div>
                        
                        <div class="form-check mx-4">
                            <input class="form-check-input" type="radio" name="fg_vig" value={edita.fg_vig} onChange={e => onInputChange(e)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Evento cancelado
                            </label>
                        </div>

                        {/*Boton de modal de modificacion exitosa : ModalEditar
                          Onclick deberia de permitir funcion de update de la carpeta services: ServiciosEvento*/}
                        <div className="text-center my-2">
                            <ModalEditar onClick={Evento.update(edita)}></ModalEditar>
                        </div>
                        
                    </div>

                </div>
            </div>
            </div> 
        </div>
    )
}



export default ModificarEvento