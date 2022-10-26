import ModificarEvento from "../components/ModificarEvento.jsx"
import { Evento } from "../services/ServiciosEvento.js"

const EditarEvento = () => {

    const evento = new Evento();
    return(
        <div className ="container">
            <ModificarEvento key={evento.no_evnt}></ModificarEvento>
        </div>
    )
}

export default EditarEvento