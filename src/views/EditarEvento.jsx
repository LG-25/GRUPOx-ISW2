import ModificarEvento from "../components/ModificarEvento.jsx"
import { Evento } from "../services/ServiciosEvento.js"

const EditarEvento = () => {
    
    const [evento, setEvento] = useState([])
    
    useEffect(() => {
        Evento.obtenerEvento(NO_EVNT)
            .then(result => {
                setEvento(result)
            })
    }, [])

    return(
        <div className ="container">
            <ModificarEvento key={evento.NO_EVNT} event={evento}></ModificarEvento>
        </div>
    )
}

export default EditarEvento