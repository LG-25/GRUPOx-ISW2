import ModificarEvento from "../components/ModificarEvento.jsx"
import { Evento } from "../services/ServiciosEvento.js"

const EditarEvento = () => {
    const evento = new Evento('Evento 2', 2, 10, 2, 'Descripcion de Evento', 'Ubicacion de evento', null, null, 'AA', false, null);
    return(
        <div className ="container">
            <ModificarEvento key={evento.NO_EVNT} event={evento}></ModificarEvento>
        </div>
    )
}

export default EditarEvento