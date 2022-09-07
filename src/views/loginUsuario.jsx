import { useState } from "react";

const LoginUsuario = ()=> {

    const [nomUSR, setnomUSR] = useState("");
    const [contra, setContra] = useState("");
    const [nomUSRI, setnomUSRI] = useState("");
    const [contraI, setContraI] = useState("");


    const validarUsuario = async () =>{
        const response = await fetch(`https://genium-backend.herokuapp.com/usuarios/${nomUSR}/${contra}`); 
        const res = await response.json();

        const USRvalido =res.respuesta.Usuario.length >0;
        if(USRvalido){
            window.location.href='/principalUsuario';
        }else{
            alert("Credenciales incorrectas")
        }

    }

    const validarUsuarioI = async () =>{
        const response = await fetch(`https://genium-backend.herokuapp.com/usuariosI/${nomUSRI}/${contraI}`); 
        const res = await response.json();

        const USRvalido =res.respuesta.Usuario.length >0;
        if(USRvalido){
            window.location.href='/principalUsuarioI';
        }else{
            alert("Credenciales incorrectas")
        }

    }


    
return(
    <div className="container fluid my-4">
        <div className="row">
            <div className="col">
                <h2>Usuario Entidad</h2>
                <div>
                    <label for="floatingInput">Nombre de usuario entidad</label>
                    <input type="text" className="form-control"  placeholder="Usuario" onChange={e => setnomUSR(e.target.value)} value={nomUSR}/>
                </div>
                <div>
                    <label for="floatingInput">Contraseña</label>
                    <input type="text" className="form-control"  placeholder="Contrasena" onChange={e => setContra(e.target.value)} value={contra}/>
                </div>
                <div className="my-4 text-center">
                    <button className="btn btn-success">Ingresar</button>
                </div>

            </div>
            <div className="col">
                <h2>Usuario Invitado </h2>
                <div>
                    <label for="floatingInput">Nombre de usuario invitado</label>
                    <input type="text" className="form-control"  placeholder="Usuario invitado" onChange={e => setnomUSRI(e.target.value)} value={nomUSRI} name="nomUSRI"/>
                </div>
                <div>
                    <label for="floatingInput">Contraseña</label>
                    <input type="text" className="form-control"  placeholder="Contraseña" onChange={e => setContraI(e.target.value)} value={contraI} name="contraI"/>
                </div>
                <div className="my-4 text-center">
                    <button className="btn btn-success">Ingresar</button>
                </div>
            </div>
        </div>
    </div> 
)
}
export default LoginUsuario