//Formulario con participantes asistentes
//a la fecha 
import { useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ParticipanteFil from "../components/ParticipanteFil"
import {ParticipantesEvento} from '../services/ServiciosParticipanteEvento.js'
import { Sidebar } from '../components/Entidad_Sidebar'



const Entidad_EventoDetalles = () => {
    const [participantes, setParticipantes] = useState([])
    const {nro} = useParams()

    useEffect(() => {
        ParticipantesEvento.ObtenerParticipantesEvento(nro)
        .then(result => {
            console.log(result);
            setParticipantes(result)
        })
    }, [])

    const Estado1 = (e) => {
        const cod_usr = e.target.name
        ParticipantesEvento.CambiarEstadoParticipante(nro,cod_usr,1)
        .then((result) => {
            alert("Se ha cambiado exitosamente el estado del participante")
            window.location.reload()
          },
          (error) =>{
            alert("Ha ocurrido un error al cambiar el estado del participante")
            console.log(error);
          })
    }

    const Estado2 = (e) => {
        const cod_usr = e.target.name
        ParticipantesEvento.CambiarEstadoParticipante(nro,cod_usr,2)
        .then((result) => {
            alert("Se ha cambiado exitosamente el estado del participante")
            window.location.reload()
          },
          (error) =>{
            alert("Ha ocurrido un error al cambiar el estado del participante")
            console.log(error);
          })
    }

    const Estado3 = (e) => {
        const cod_usr = e.target.name
        ParticipantesEvento.CambiarEstadoParticipante(nro,cod_usr,3)
        .then((result) => {
            alert("Se ha cambiado exitosamente el estado del participante")
            window.location.reload()
          },
          (error) =>{
            alert("Ha ocurrido un error al cambiar el estado del participante")
            console.log(error);
          })
    }

    const Eliminar = (e) => {
        const cod_usr = e.target.name
        ParticipantesEvento.EliminarParticipanteEvento(nro,cod_usr)
        .then((result) => {
            alert("Se ha eliminado al participante seleccionado del evento evento")
            window.location.reload()
          },
          (error) =>{
            alert("Ha ocurrido un error al eliminar al participante")
            console.log(error);
          })
    }
    return (
        <> 
        <Sidebar></Sidebar>
        <div>
            <div>
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header ">
                                <h1>Participantes</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-sm">
                            <div className="row mt-2 ">
                                <div className="col-sm-7" ></div>

                                <div className="col-sm"></div>

                                <div className="col-sm" id="mostrar" >
                                    <label className="form-label" id="mostrar 1">Cantidad Total:</label>
                                    <label type="number" className="form-control-lg" min="0" > {participantes.length} </label>
                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="col-sm"></div>

                                <div className="col-sm-8 card-body table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Nombres Apellidos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {participantes.map(participante => {
                                                if (participante.USUARIO_INVITADO_EVENTOs[0].CO_ESTD === 1) {
                                                    return(
                                                        <>
                                                        <tr>
                                                            <td>
                                                                <span className='me-5'>{participante.NOM + ' ' + participante.AP_PAT + ' ' + participante.AP_MAT}</span>
                                                                <span className="btn-group ms-5" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio1" autoComplete="off" onClick={e=>Estado1(e)} checked></input>
                                                                <label className="btn btn-outline-info" htmlFor="btnradio1">Interesado</label>
                                                            
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio2" autoComplete="off" onClick={e=>Estado2(e)}></input>
                                                                <label className="btn btn-outline-warning" htmlFor="btnradio2">Participante</label>
                                                            
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio3" autoComplete="off" onClick={e=>Estado3(e)}></input>
                                                                <label className="btn btn-outline-success" htmlFor="btnradio3">Asistente</label>
                                                                <button type="button" name={participante.CO_USR_INVT} className="btn btn-outline-danger" onClick={e=>Eliminar(e)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                                                    </svg>
                                                                </button>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        </>
                                                        )
                                                }
                                                else if (participante.USUARIO_INVITADO_EVENTOs[0].CO_ESTD === 2) {
                                                    return(
                                                        <>
                                                        <tr>
                                                            <td>
                                                                <span className='me-5'>{participante.NOM + ' ' + participante.AP_PAT + ' ' + participante.AP_MAT}</span>
                                                                <span className="btn-group ms-5" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio1" autoComplete="off" onClick={e=>Estado1(e)} ></input>
                                                                <label className="btn btn-outline-info" htmlFor="btnradio1">Interesado</label>
                                                            
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio2" autoComplete="off" onClick={e=>Estado2(e)}checked></input>
                                                                <label className="btn btn-outline-warning" htmlFor="btnradio2">Participante</label>
                                                            
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio3" autoComplete="off" onClick={e=>Estado3(e)}></input>
                                                                <label className="btn btn-outline-success" htmlFor="btnradio3">Asistente</label>
                                                                <button type="button" name={participante.CO_USR_INVT} className="btn btn-outline-danger" onClick={e=>Eliminar(e)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                                                    </svg>
                                                                </button>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        </>
                                                        )
                                                }
                                                else if (participante.USUARIO_INVITADO_EVENTOs[0].CO_ESTD === 3) {
                                                    return(
                                                        <>
                                                        <tr>
                                                            <td>
                                                                <span className='me-5'>{participante.NOM + ' ' + participante.AP_PAT + ' ' + participante.AP_MAT}</span>
                                                                <span className="btn-group ms-5" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio1" autoComplete="off" onClick={e=>Estado1(e)}></input>
                                                                <label className="btn btn-outline-info" htmlFor="btnradio1">Interesado</label>
                                                            
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio2" autoComplete="off" onClick={e=>Estado2(e)}></input>
                                                                <label className="btn btn-outline-warning" htmlFor="btnradio2">Participante</label>
                                                            
                                                                <input type="radio" className="btn-check" name={participante.CO_USR_INVT} id="btnradio3" autoComplete="off" onClick={e=>Estado3(e)} checked></input>
                                                                <label className="btn btn-outline-success" htmlFor="btnradio3">Asistente</label>
                                                                <button type="button" name={participante.CO_USR_INVT} className="btn btn-outline-danger" onClick={e=>Eliminar(e)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                                                    </svg>
                                                                </button>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        </>
                                                        )
                                                }
                                            })}                                            
                                        </tbody>
                                    </table>

                                </div>

                                <div className="col-sm"></div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default Entidad_EventoDetalles