//
export class ParticipantesEvento{
    constructor(){}
    static async ObtenerParticipantesEvento(cod) {
        const response = await fetch(`https://genium-backend.herokuapp.com/participantes/${cod}`);
        // response.ok devuelve true o false
        // dependiendo del exito de la operacion
        if (!response.ok) {
            //lanzamos error si no se pudo
            throw new Error('No se pudo obtener todos los eventos')
        } else {
            // devolvemos la consulta
            const participantesJson = await response.json();
            const participantes = participantesJson.map(() => {
                return(
                    //constructor(nu_evnt, no_evnt, qt_pers, qt_hrs, desc_evnt, ubic, fh_inicio, fh_fin, url_evnt, fg_vig)
                    new ParticipantesEvento()
                )
            })
            console.log(participantesJson);
            return participantesJson
        }
    }

        /*
        NU_EVNT : NU_EVNT,
        CO_USR_INVT : CO_USR_INVT,
        FH_INSCR : FH_INSCR,
        CO_ESTD : CO_ESTD
        */
    
    static async CrearParticipanteEvento(nu_evnt, co_usr_inv, fh_inscr, co_estd){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                NU_EVNT : nu_evnt,
                CO_USR_INVT : co_usr_inv,
                FH_INSCR : fh_inscr,
                CO_ESTD : co_estd
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/participantes`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo registrar el participante en el evento')
        }else{
            return response.json()
        }
    } 
    static async EliminarParticipanteEvento(nu_evnt, co_usr_inv){
        //console.log("Numero de evento: "+nu_evnt+" Usuario: "+co_usr_inv)
        const response = await fetch(`https://genium-backend.herokuapp.com/participantes?nu_evnt=${nu_evnt}&co_usr=${co_usr_inv}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error('No se pudo eliminar este evento de la lista de "Mis eventos"');
        }
    } 

    static async CambiarEstadoParticipante(nu_evnt, co_usr, co_estd){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                CO_ESTD : co_estd
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/participantes?nu_evnt=${nu_evnt}&co_usr=${co_usr}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el estado del participante')
        }else{
            return response.json()
        }
    }

    static async ConfirmarQrParticipante(nu_evnt, co_usr){
        const requestOptions = {
            headers: { 'Content-Type': 'application/json', 'token' : 'sprint3'},
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/confirmarQr?nu_evnt=${nu_evnt}&nu_usr=${co_usr}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el estado del participante')
        }else{
            return response.json()
        }
    }

}
