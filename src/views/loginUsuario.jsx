import { useState } from "react";
import { Link } from 'react-router-dom';  

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
    <div className="container fluid my-4 w-50 border p-5 position-absolute top-50 start-50 translate-middle">
        <div className="row">
            <div className="col">
                <h2 className="mb-4 text-center">¡Bienvenido usuario!</h2>
                <div className="">
                    <label for="floatingInput">Nombre de usuario</label>
                    <input type="text" className="form-control"  placeholder="Usuario" onChange={e => setnomUSR(e.target.value)} value={nomUSR}/>
                </div>
                <div className="my-4">
                    <label for="floatingInput">Contraseña</label>
                    <input type="text" className="form-control"  placeholder="Contrasena" onChange={e => setContra(e.target.value)} value={contra}/>
                </div>
                <div className="my-4 text-center">
                    <button className="btn btn-success">Ingresar</button>
                </div>
                <div className="text-center">
                    <Link to="/">
                        <div className="fw-4 text-center">¿No tienes cuenta? Regístrate</div>
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/">
                        <div className="fw-4 text-center">Volver</div>
                    </Link>
                </div>

            </div>
            
        </div>
    </div> 
)
}
export default LoginUsuario