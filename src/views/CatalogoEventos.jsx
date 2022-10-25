import React, { useEffect, useState } from 'react'
import { GestorEventos } from '../classes/GestorEventos.js'
import { CartaEvento } from '../components/CartaEvento.jsx';
import { Sidebar } from '../components/Sidebar.jsx';

export default function CatalogoEventos() {

    const [eventos, setEventos] = useState([])
    const gestorEventos = new GestorEventos();
    
    // Solamente se realizará una vez el useState
    useEffect(() => {
        gestorEventos.obtenerEventos()
            .then(result => {
                setEventos(result)
            })
    }, [])

    console.log(eventos);
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col">
                    <div className="d-flex flex-column flex-shrink-0 container mt-3 justify-content-center">
                        <div className="row row-cols-md-4 justify-content-center">
                            {eventos.map(event => <CartaEvento key={event.NU_EVNT} evento={event}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
