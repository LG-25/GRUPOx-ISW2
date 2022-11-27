import React, { useEffect, useState } from 'react'
import { Evento } from '../services/ServiciosEvento.js'
import { CartaEvento } from '../components/CartaEvento.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { Redirect } from 'react-router-dom';

export default function CatalogoEventos() {

    const [eventos, setEventos] = useState([])
    const user = sessionStorage.getItem("user")
    // Solamente se realizará una vez el useState
    useEffect(() => {
        if(user !== null){
            Evento.obtenerEventos()
                .then(result => {
                    setEventos(result)
                })
        }
    }, [])
    return (
        <>
            {
                user===null ?
                <Redirect to = "/"> </Redirect>
                : 
                <div className="row">
                    <div className="col-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column flex-shrink-0 container mt-3 justify-content-center">
                            <div className="row row-cols-md-4 justify-content-center">
                                {eventos.map(event => <CartaEvento tipo = {"general"} key={event.NU_EVNT} evento={event}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
