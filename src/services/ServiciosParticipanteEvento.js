//
export class ParticipantesEvento{
    constructor(){}
    static async ObtenerParticipantesEvento(cod){
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
            return participantes
        }
    }

    static async crearParticipanteEvento(req, res){
        /*
        NU_EVNT : NU_EVNT,
        CO_USR_INVT : CO_USR_INVT,
        FH_INSCR : FH_INSCR,
        CO_ESTD : CO_ESTD
        */
        try{
            const {NU_EVNT, CO_USR_INVT, FH_INSCR, CO_ESTD} = req.body;
            const newParticipante = await ParticipantesEvento.crearParticipanteEvento({
                NU_EVNT : NU_EVNT,
                CO_USR_INVT : CO_USR_INVT,
                FH_INSCR : FH_INSCR,
                CO_ESTD : CO_ESTD
            })
            console.log(newParticipante);
            res.json(newParticipante);
        }
        catch (error){
            return res.status(500).json({message : error.message});
        }
    }




}

