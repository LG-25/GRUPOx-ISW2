import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ModificarEvento from "../components/ModificarEvento.jsx"
import { Sidebar } from "../components/Entidad_Sidebar";
import { Evento } from "../services/ServiciosEvento.js"

const EditarEvento = () => {

    const [eventoM, setEventoM] = useState({});
    const {nu_evnt} = useParams();
    useEffect(() => {
        Evento.ObtenerEvento(nu_evnt)
        .then(result => {
            setEventoM(result)
            })
    }, [])

    return(
        <>
        <Sidebar></Sidebar>
        <div className ="container">
            <ModificarEvento events = {eventoM}></ModificarEvento>
        </div>
        </>
    )
}

export default EditarEvento