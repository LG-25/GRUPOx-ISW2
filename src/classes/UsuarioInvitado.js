export class UsuarioInvitado{
    constructor(co_usr_inv, nom_usr, correo, contra, nom, ap_pat, ap_mat, fh_nacimiento, fh_creacion){
        this.co_usr_inv= co_usr_inv
        this.nom_usr= nom_usr
        this.correo = correo
        this.contra= contra
        this.nom= nom
        this.ap_pat= ap_pat
        this.ap_mat= ap_mat
        this.fh_nacimiento= fh_nacimiento
        this.fh_creacion= fh_creacion
    }

    async update(){
        const requestOptions = {
            method: 'PUT',
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
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${this.nu_evnt}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el evento')
        }else{
            return response.json()
        }
    }
}