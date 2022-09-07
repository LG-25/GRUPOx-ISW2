import { UsuarioInvitado } from "./UsuarioInvitado";
export class GestorUsuarios{
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
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${co_usr_inv}`)
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
}