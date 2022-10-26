import React, { useEffect, useState } from 'react'
import { Evento } from '../services/ServiciosEvento.js'
import { CartaEvento } from '../components/Entidad_CartaEvento.jsx';
import { Sidebar } from '../components/Entidad_Sidebar.jsx';


//Para usuario ENTIDAD
export default function EventosEntidad() {

    const [eventos, setEventos] = useState([])
    
    // Solamente se realizará una vez el useState
    useEffect(() => {
        let data = sessionStorage.getItem("userEN");
        if (data === null) {
            data = 1;
        }
        //Evento.ObtenerEventosEntidad(1)
        Evento.ObtenerEventosEntidad(data)
            .then(result => {
                setEventos(result)
            })
    }, [])

    const ArmarBody = () => {
        console.log(eventos)
        if (eventos.length>0) {
            return(eventos.map(event => <CartaEvento key={event.NU_EVNT} evento={event}/>))
        }
        else {
            return (<h1 >NO HAY EVENTOS DISPONIBLES</h1>)
        }
    }

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
                            {ArmarBody()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
