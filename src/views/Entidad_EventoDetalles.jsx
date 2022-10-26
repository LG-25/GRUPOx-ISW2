//Formulario con participantes asistentes
//a la fecha 

import ParticipanteFil from "../components/ParticipanteFil"

const lista = ["Pepito Manco", "Jefferson Farfan", "La foquita y aladino"]

const ArmarLista = () => {
    const ListaParticipante = []
    lista.forEach((participante,index) => 
    {ListaParticipante.push(
            <ParticipanteFil key={`${index}`} participante = {participante}/>
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
                            <div className="row mt-2">
                                <div className="col-sm-6" ></div>

                                <div className="col-sm-3"></div>

                                <div className="col-sm-3" id="mostrar" >
                                    <label className="form-label" id="mostrar 1">Cantidad Total</label>
                                    <label type="number" className="form-control" min="0" > {lista.length} </label>
                                </div>

                            </div>

                            <div className="mt-2">

                            
                            <div className="card-body table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Nombres Apellidos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ArmarLista()}
                                    </tbody>
                                </table>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}



export default Entidad_EventoDetalles