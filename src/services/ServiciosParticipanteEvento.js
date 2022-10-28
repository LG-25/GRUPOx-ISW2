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
            return participantesJson
        }
    }

<<<<<<< HEAD
    /* METODO QUE ESTABA EN USUARIO INVITADO*/
    static async updateUsuarioI(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({   
                NOM_USR: this.nom_usr,
                CORREO: this.correo,
                CONTRA: this.contra,
                NOM: this.nom,
                AP_PAT: this.ap_pat,
                AP_MAT: this.ap_mat,
                FH_NACIMIENTO: this.fh_nacimiento,
                FH_CREACION: this.fh_creacion
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com//usuariosI/${this.nu_evnt}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el evento')
=======
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
>>>>>>> 67757f264a89492d0a435e3f6c709de0b0d02b06
        }else{
            return response.json()
        }
    } 
<<<<<<< HEAD

=======
>>>>>>> 67757f264a89492d0a435e3f6c709de0b0d02b06



}
