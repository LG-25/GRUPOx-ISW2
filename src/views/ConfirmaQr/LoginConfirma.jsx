import React from 'react'
import { Link } from 'react-router-dom'
import { ServiciosUsuario } from '../../services/ServiciosUsuario'
import { useState } from 'react'


const LoginConfirma = () => {

    //usuario entidad
    const [correoUSREN, setcorreoUSREN] = useState("");
    const [contraEN, setContraEN] = useState("");

    const validarUsuario = async () =>{
        const res = await ServiciosUsuario.validarUsuarioEN(correoUSREN,contraEN);
        const USRvalido = res["CO_USR"] !== undefined;
        if(USRvalido){
            window.location.href='/pantallaConfirma';
            localStorage.setItem('userConfirma' , `${res["CO_USR"]}`)
        }else{
            alert("Credenciales incorrectas")
        }
    }

    return (
    
        <div className="container p-5 mw-100 h-100">
            <div className="row  align-items-center h-100">
                <div className="col-6 border mx-auto">
                    <div className="card h-100 justify-content-center"></div>
                        <h2 className="mb-4 text-center">¡Bienvenido usuario entidad!</h2>
                        <div className="">
                            <label for="floatingInput">Correo electrónico</label>
                            <input type="text" className="form-control"  placeholder="Correo electrónico" value={correoUSREN} onChange={e => setcorreoUSREN(e.target.value)}/>
                        </div>
                        <div className="my-4">
                            <label for="floatingInput">Contraseña</label>
                            <input type="password" className="form-control"  placeholder="Contraseña" value={contraEN} onChange={e => setContraEN(e.target.value)}/>
                        </div>
                        <div className="my-4 text-center">
                            <button className="btn btn-success" onClick={validarUsuario}>Ingresar</button>
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
            </div>
        </div>
    )
}

export default LoginConfirma