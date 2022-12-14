import { Usuario } from "../classes/Usuario";
import {UsuarioInvitado} from "../classes/UsuarioInvitado"
export class ServiciosUsuario{//Cambiar a clase llamada USUARIO
    static async validarUsuarioEN(correoUSREN,contraEN){
        //usuario entidad
        const response = await fetch(`https://genium-backend.herokuapp.com/login?correo=${correoUSREN}&contra=${contraEN}`); 
        //https://genium-backend.herokuapp.com/login?correo=javierenriqueos@gmail.com&contra=admi123
        const res = await response.json();
        return res
    }
}
export class ServiciosUsuarioI{//Cambiar a clase llamada USUARIO
    constructor(){}
    static async obtenerUsuariosI(){
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

    //usuario entidad
    static async ObtenerUsuarioE(co_usr_inv){
        const response = await fetch(`https://genium-backend.herokuapp.com/usuario/${co_usr_inv}`)
        if(!response.ok){
            throw new Error('No se pudo obtener el usuario invitado')
        }else{
            const usuarioJson = await response.json();
            return (
                new Usuario(
                    co_usr_inv,
                    usuarioJson.NOM_USR,
                    usuarioJson.CORREO,
                    usuarioJson.CONTRA,
                    usuarioJson.NOM,
                    usuarioJson.FH_CREACION,
                    usuarioJson.PAIS,
                    usuarioJson.RUC
                )
            )
        }
    }
    ///
    static async updateUsuarioE(objeto){
        console.log("correo: "+ objeto.correo)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({   
                CO_USR: objeto.co_usr,
                NOM_USR: objeto.nom_usr,
                CORREO : objeto.correo,
                CONTRA: objeto.contra,
                NOM: objeto.nom,
                FH_CREACION: objeto.fh_creacion,
                PAIS : objeto.pais,
                RUC : objeto.ruc
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/usuario/${objeto.co_usr}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el usuario')
        }else{
            return response.json()
        }
    } 



    ///
    static async ObtenerUsuarioI(co_usr_inv){
        const response = await fetch(`https://genium-backend.herokuapp.com/usuarioI/${co_usr_inv}`)
        if(!response.ok){
            throw new Error('No se pudo obtener el usuario invitado')
        }else{
            const usuarioJson = await response.json();
            return (
                new UsuarioInvitado(
                    co_usr_inv,
                    usuarioJson.NOM_USR,
                    usuarioJson.CORREO,
                    usuarioJson.CONTRA,
                    usuarioJson.NOM,
                    usuarioJson.AP_PAT,
                    usuarioJson.AP_MAT,
                    usuarioJson.FH_NACIMIENTO,
                    usuarioJson.FH_CREACION
                )
            )
        }
    }

    static async actualizarUsuarioI(co_usr_inv, datos){
        await fetch(`https://genium-backend.herokuapp.com/usuarioI/${co_usr_inv}`,{
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
    /* METODO QUE ESTABA EN USUARIO INVITADO CORREGIDO*/
    static async updateUsuarioI(objeto){
        console.log("correo: "+ objeto.correo)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({   
                NOM_USR: objeto.nom_usr,
                CORREO: objeto.correo,
                CONTRA: objeto.contra,
                NOM: objeto.nom,
                AP_PAT: objeto.ap_pat,
                AP_MAT: objeto.ap_mat,
                FH_NACIMIENTO: objeto.fh_nacimiento,
                FH_CREACION: objeto.fh_creacion
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/usuarioI/${objeto.co_usr_inv}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el usuario')
        }else{
            return response.json()
        }
    } 

    static async validarUsuario(correoUSR,contra){
        //usuario invitado
        const response = await fetch(`https://genium-backend.herokuapp.com/login?correo=${correoUSR}&contra=${contra}`); 
        const res = await response.json();
        return res
    }
}