import { useState } from "react";
import { Link } from 'react-router-dom';  
import { ServiciosUsuario, ServiciosUsuarioI } from "../services/ServiciosUsuario";

const LoginUsuario = ()=> {

    //usuario invitado
    const [correoUSR, setcorreoUSR] = useState("");
    const [contra, setContra] = useState("");
    //usuario entidad
    const [correoUSREN, setcorreoUSREN] = useState("");
    const [contraEN, setContraEN] = useState("");


    const validarUsuarioEN = async () =>{
        //usuario entidad
        //const response = await fetch(`https://genium-backend.herokuapp.com/login?correo=${correoUSREN}&contra=${contraEN}`); 
        //https://genium-backend.herokuapp.com/login?correo=javierenriqueos@gmail.com&contra=admi123
        const res = await ServiciosUsuario.validarUsuarioEN(correoUSREN,contraEN);
        console.log(res)
        const USRvalido = res["CO_USR"] !== undefined;
        console.log(res["CO_USR"])
        if(USRvalido){
            window.location.href='/InicioEntidad';
            sessionStorage.setItem('userEN' , `${res["CO_USR"]}`)
        }else{
            alert("Credenciales incorrectas")
        }

    }

    const validarUsuario = async () =>{
        //usuario invitado
        //const response = await fetch(`https://genium-backend.herokuapp.com/login?correo=${correoUSR}&contra=${contra}`); 
        const res = await ServiciosUsuarioI.validarUsuario(correoUSR,contra);
        console.log(res)
        const USRvalido = res["CO_USR_INVT"] !== undefined;
        if(USRvalido){
            window.location.href='/InicioUsuario';
            sessionStorage.setItem('user' , `${res["CO_USR_INVT"]}`);
        }else{
            alert("Credenciales incorrectas")
        }

    }


    
return(
<div>
    <div className="container fluid my-4 w-75 p-5 position-absolute top-50 start-50 translate-middle">
        <div className="row">
            
            <div className="col-6 border p-5">
                    <h2 className="mb-4 text-center">¡Bienvenido usuario entidad!</h2>
                    <div className="">
                        <label for="floatingInput">Correo electrónico</label>
                        <input type="text" className="form-control"  placeholder="Correo electrónico" onChange={e => setcorreoUSREN(e.target.value)} value={correoUSREN}/>
                    </div>
                    <div className="my-4">
                        <label for="floatingInput">Contraseña</label>
                        <input type="password" className="form-control"  placeholder="Contraseña" onChange={e => setContraEN(e.target.value)} value={contraEN}/>
                    </div>
                    <div className="my-4 text-center">
                        <button className="btn btn-success" onClick={validarUsuarioEN}>Ingresar</button>
                    </div>
                    <div className="text-center">
                        <Link to="/SignupEntidad">
                            <div className="fw-4 text-center">¿No tienes cuenta? Regístrate</div>
                        </Link>
                    </div>
                    <div className="text-center">
                        <Link to="/">
                            <div className="fw-4 text-center">Volver</div>
                        </Link>
                    </div>

            </div>

            <div className="col-6 border p-5">
                <h2 className="mb-4 text-center">¡Bienvenido usuario invitado!</h2>
                <div className="">
                    <label for="floatingInput">Correo electrónico</label>
                    <input type="text" className="form-control"  placeholder="Correo electrónico" onChange={e => setcorreoUSR(e.target.value)} value={correoUSR}/>
                </div>
                <div className="my-4">
                    <label for="floatingInput">Contraseña</label>
                    <input type="password" className="form-control"  placeholder="Contraseña" onChange={e => setContra(e.target.value)} value={contra}/>
                </div>
                <div className="my-4 text-center">
                    <button className="btn btn-success" onClick={validarUsuario}>Ingresar</button>
                </div>
                <div className="text-center">
                    <Link to="/SignUpUsuario">
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
</div>
)
}
export default LoginUsuario