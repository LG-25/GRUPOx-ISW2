<<<<<<< HEAD
export class Usuario{
    constructor(co_usr_inv, nom_usr, correo, contra, nom, fh_creacion, pais, ruc){
=======
class Usuario{
    constructor(co_usr_inv, nom_usr, correo, contra, nom, ap_pat, ap_mat, fh_nacimiento, fh_creacion){
>>>>>>> main
        this.co_usr_inv= co_usr_inv
        this.nom_usr= nom_usr
        this.correo = correo
        this.contra= contra
        this.nom= nom
<<<<<<< HEAD
        this.fh_creacion= fh_creacion
        this.pais = pais
        this.ruc = ruc
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
                FH_CREACION: this.fh_creacion,
                PAIS: this.pais,
                RUC : this.ruc
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/usuarios/${this.nu_usr}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el usuario')
        }else{
            return response.json()
        }
=======
        this.ap_pat= ap_pat
        this.ap_mat= ap_mat
        this.fh_nacimiento= fh_nacimiento
        this.fh_creacion= fh_creacion
>>>>>>> main
    }
}