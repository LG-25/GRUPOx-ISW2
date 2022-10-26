//Formulario con participantes asistentes
//a la fecha 
import { useParams } from 'react-router-dom'
import ParticipanteFil from "../components/ParticipanteFil"
import {ParticipantesEvento} from '../services/ServiciosParticipanteEvento.js'

let {nro} = useParams()

const [participantes, setParticipantes] = useState([])
    
    // Solamente se realizará una vez el useState
    useEffect(() => {
        ParticipantesEvento.ObtenerParticipanteEvento(nro)
            .then(result => {
                setParticipantes(result)
            })
    }, [])

const ArmarLista = () => {
    const ListaParticipante = []
    lista.forEach((participante, index) => {
        ListaParticipante.push(
            <ParticipanteFil key={`${index}`} participante={participante} />
        )
    })
    return ListaParticipante
}


const Entidad_EventoDetalles = () => {
    return (
        <div>
            <div>
                <div className="card">
                    <div className="card-header">
                        <h1>Participantes</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-sm">
                            <div className="row mt-2 ">
                                <div className="col-sm-7" ></div>

                                <div className="col-sm"></div>

                                <div className="col-sm" id="mostrar" >
                                    <label className="form-label" id="mostrar 1">Cantidad Total:</label>
                                    <label type="number" className="form-control-lg" min="0" > {lista.length} </label>
                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="col-sm-3"></div>

                                <div className="col-sm-6 card-body table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="text-center">Nombres Apellidos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ArmarLista()}                                            
                                        </tbody>
                                    </table>

                                </div>

                                <div className="col-sm-3"></div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Entidad_EventoDetalles