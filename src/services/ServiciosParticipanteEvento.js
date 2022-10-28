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
        }else{
            return response.json()
        }
    } 




}
