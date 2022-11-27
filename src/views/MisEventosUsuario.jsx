import React, { useEffect, useState } from 'react'
import { Evento } from '../services/ServiciosEvento.js'
import { CartaEvento } from '../components/Entidad_CartaEvento.jsx';
import { Sidebar } from '../components/Entidad_Sidebar.jsx';
import { Redirect } from 'react-router-dom';


//Para usuario ENTIDAD
export default function EventosEntidad() {
    const [eventos, setEventos] = useState([])
    let data = sessionStorage.getItem("userEN");
    let cargo = false
    // Solamente se realizará una vez el useState
    useEffect(() => {
        // if(data === null){
        //     console.log(data);
        //     return <Redirect to='/InicioEntidad'></Redirect>
        // }
        //Evento.ObtenerEventosEntidad(1)
        cargo = false
        if(data !== null){
            Evento.ObtenerEventosEntidad(data)
                .then(result => {
                    setEventos(result)
                    cargo = true
                })
        }
    }, [])

    const ArmarBody = () => {
        if (eventos.length>0 && cargo == false) {
            return(eventos.map(event => <CartaEvento key={event.NU_EVNT} evento={event}/>))
        }
        else{
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
                            {data===null ? <Redirect to='/'></Redirect> : ArmarBody()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
