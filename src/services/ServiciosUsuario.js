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
    /* METODO QUE ESTABA EN USUARIO INVITADO*/
    static async updateUsuarioI(co_usr_inv, nombre, apellido, apellido2, correo, contra, nom, fn, fc){
        console.log("nombrexxx: "+ nombre)
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({

                CO_USR_INVT: co_usr_inv,
                NOM_USR: nombre,
                CORREO: correo,
                CONTRA: contra,
                AP_PAT: apellido,
                AP_MAT: apellido2,
                NOM: nom,
                FH_NACIMIENTO: fn,
                FH_CREACION: fc
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/usuarioI/${co_usr_inv}`, requestOptions)
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