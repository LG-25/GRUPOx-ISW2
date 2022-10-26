import { UsuarioInvitado } from "../classes/UsuarioInvitado";
export class GestorUsuarios{//Cambiar a clase llamada USUARIO
    constructor(){}
    async obtenerUsuariosI(){
        const response = await fetch(`https://genium-backend.herokuapp.com/UsuariosI`);
        if (!response.ok){
            throw new Error('No se pudo obtener todos los usuarios invitados')

        }else{
            const usuariosIJson= await response.json();
            const usuariosI = usuariosIJson.map(usuarioI=>{
                return (
                    new UsuarioInvitado(
                        usuarioI.CO_USR_INV ,
                        usuarioI.NOM_USR,
                        usuarioI.CORREO,
                        usuarioI.CONTRA,
                        usuarioI.NOM,
                        usuarioI.AP_PAT,
                        usuarioI.AP_MAT,
                        usuarioI.FH_NACIMIENTO,
                        usuarioI.FH_CREACION
                    )
                )
            })
            return usuariosI
        }
    }
    async ObtenerUsuarioI(co_usr_inv){
        const response = await fetch(`https://genium-backend.herokuapp.com/UsuariosI/${co_usr_inv}`)
        if(!response.ok){
            throw new Error('No se pudo obtener el usuario invitado')
        }else{
            const usuarioJson = await response.json();
            const usuarioI=
                new UsuarioInvitado(
                    usuarioJson.NOM_USR,
                    usuarioJson.CORREO,
                    usuarioJson.CONTRA,
                    usuarioJson.NOM,
                    usuarioJson.AP_PAT,
                    usuarioJson.AP_MAT,
                    usuarioJson.FH_NACIMIENTO,
                    usuarioJson.FH_CREACION
                )
            return usuarioI
        }
    }

    async actualizarUsuarioI(co_usr_inv, datos){
        await fetch(`https://genium-backend.herokuapp.com/UsuariosI/${co_usr_inv}`,{
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    NOM_USR: datos[0],
                    AP_PAT: datos[1],
                    AP_MAT: datos[2],
                    CORREO: datos[3],
                    CONTRA: datos[4]
                }
            )
        })
    }
    /* METODO QUE ESTABA EN USUARIO INVITADO
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
        const response = await fetch(`https://genium-backend.herokuapp.com//usuariosI/${this.nu_evnt}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el evento')
        }else{
            return response.json()
        }
    } */
}