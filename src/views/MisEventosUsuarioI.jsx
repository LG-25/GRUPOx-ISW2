import React, { useEffect, useState } from 'react'
import { Evento } from '../services/ServiciosEvento.js'
import { CartaEvento } from '../components/CartaEvento.jsx';
import { Sidebar } from '../components/Sidebar.jsx';
import { Redirect } from 'react-router-dom';


//Para Usuario
export default function CatalogoEventos() {

    const [eventos, setEventos] = useState([])
    let co_usr = sessionStorage.getItem("user");
    // Solamente se realizará una vez el useState
    console.log(co_usr);
    useEffect(() => {
        if(co_usr !== null){
            Evento.ObtenerEventosUsuarioI(co_usr)
            .then(result => {
                setEventos(result)
            })
        }
    }, [])
    
    return (
        <>
            {
                co_usr===null ? 
                <Redirect to='/'></Redirect> 
                : 
                <div className="row">
                    <div className="col-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col">
                        <div className="d-flex flex-column flex-shrink-0 container mt-3 justify-content-center">
                            <div className="row row-cols-md-4 justify-content-center">
                                {eventos.map(event => <CartaEvento tipo="registrado" key={event.NU_EVNT} evento={event}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}