import { useEffect } from "react";
import { useState } from "react";
import ModificarEvento from "../components/ModificarEvento.jsx"
import { Evento } from "../services/ServiciosEvento.js"

const EditarEvento = () => {

    const [eventoM, setEventoM] = useState([]);
    const evento = new Evento();
    
    useEffect(() => {
        evento.ObtenerEvento(10)
            .then(result => {
                setEventoM(result)
            })
    }, [])

    return(
        <div className ="container">
            <ModificarEvento events = {eventoM}></ModificarEvento>
        </div>
    )
}

export default EditarEvento