import React, { useEffect, useState } from 'react'
import { GestorEventos } from '../classes/GestorEventos.js'
import { CartaEvento } from '../components/CartaEvento.jsx';

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
        <div className='catalogo'>
            {eventos.map(event => <CartaEvento key={event.NU_EVNT} evento={event}/>)}
        </div>
    )
}
