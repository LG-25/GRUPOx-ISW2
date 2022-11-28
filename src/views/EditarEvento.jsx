import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ModificarEvento from "../components/ModificarEvento.jsx"
import { Sidebar } from "../components/Entidad_Sidebar";
import { Evento } from "../services/ServiciosEvento.js"

const EditarEvento = () => {

    const [evento, setEvento] = useState({});
    const {nu_evnt} = useParams();
    console.log("numero: "+ nu_evnt)
    useEffect(() => {
        Evento.ObtenerEvento(nu_evnt)
        .then(result => {
            setEvento(result)
            })
    }, [])

    console.log("evento: " + JSON.stringify(evento));

    return(
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col">
                <div className="d-flex flex-column flex-shrink-0 container mt-3 justify-content-center">
                    <ModificarEvento events = {evento}></ModificarEvento>
                </div>
            </div>
        </div>
        
    )
}

export default EditarEvento