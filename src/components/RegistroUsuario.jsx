import { useState } from "react";


const RegistroUsuario = () => {
        const [datos, setDatos] = useState({
            CO_USR: "",
            NOM_USR: "",
            CORREO: "",
            CONTRA: "",
            NOM: "",
            AP_PAT: "",
            AP_MAT: "",
            FH_NACIMIENTO:"",
            FH_CREACION: "",
        })
        
        const validar = _ =>{
            if(datos["NOM_USR"] === "") return false;
            if(datos["CORREO"] === "") return false;
            if(datos["CONTRA"] === "") return false;
            if(datos["FH_NACIMIENTO"] === "") return false;
            return true; 
        }
    
        const {NOM_USR, CORREO, CONTRA,NOM, AP_PAT,AP_MAT, FH_NACIMIENTO} =datos;
    
        const onInputChange = e =>{
            console.log(datos);
            setDatos({
                ...datos, [e.target.name]: e.target.value
            })
        }
    
        const onSubmit = async  e => {
            e.preventDefault()
            if(validar()){
                const response = await fetch(`https://genium-backend.herokuapp.com/usuarioI` , {
                    method: "POST",
                    headers:{
                        'Acept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        NOM_USR: datos["NOM_USR"],
                        CORREO: datos["CORREO"],
                        CONTRA: datos["CONTRA"],
                        NOM: datos["NOM"],
                        AP_PAT: datos["AP_PAT"],
                        AP_MAT: datos["AP_MAT"],
                        FH_NACIMIENTO: datos["FH_NACIMIENTO"],
                        FH_CREACION : Date.now()
                    })
                })
                if(response.ok){
                    alert("Se ha creado al usuario satisfactoriamente")
                    window.location.href = "/LoginUsuario"
                }
                else{
                    alert("Ha ocurrido un error con la petición")
                }
            }
            else{
                alert("Falta información obligatoria por completar")
            }
    
        }
    
        return <>
            <div className="container-fluid">
                <h1 className="my-4 text-center"> ¡Regístrate! </h1>
    
    
                <form className="container-fluid" >
    
                    <div className="container-fluid">
                        <h3 className="mb-2">Datos de la cuenta</h3>
                        <div class="mb-3">
                            <label for="NOM_USR" class="form-label">Nombre de usuario</label>
                            <input type="text" class="form-control" name="NOM_USR" value={NOM_USR} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label for="CORREO" class="form-label">Correo</label>
                            <input type="email" class="form-control" name="CORREO" value={CORREO} onChange={e=>onInputChange(e)} aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="CONTRA" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" name="CONTRA" value={CONTRA} onChange={e=>onInputChange(e)}/>
                        </div>
                    </div>
    
                    <div className="container-fluid mt-4">
                        <h3 className="mb-2">Datos personales</h3>
                        <div class="mb-3">
                            <label for="NOM_USR" class="form-label">Nombre</label>
                            <input type="text" class="form-control" name="NOM" value={NOM} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label for="AP_PAT" class="form-label">Apellido Paterno</label>
                            <input type="text" class="form-control" name="AP_PAT" value={AP_PAT} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label for="AP_MAT" class="form-label">Apellido Materno</label>
                            <input type="text" class="form-control" name="AP_MAT" value={AP_MAT} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div class="mb-3">
                            <label for="FH_NACIMIENTO" class="form-label">Fecha de nacimiento</label>
                            <input type="date" class="form-control" name="FH_NACIMIENTO" value={FH_NACIMIENTO} onChange={e=>onInputChange(e)}/>
                        </div>
                        <div className="text-center mb-4">
                            <button type="submit" className="btn btn-primary my-2" onClick={e => onSubmit(e)}>Regístrate</button>
                        </div>
                    </div>
                </form>
    
    
            </div>
        </>
    
    
    }

export default RegistroUsuario