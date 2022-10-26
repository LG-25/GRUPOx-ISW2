import { useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const RegistroEntidad =()=>{

    const [datos, setDatos] = useState({
        CO_USR: "",
        NOM_USR: "",
        CORREO: "",
        CONTRA: "",
        NOM: "",
        FH_CREACION: "",
        PAIS: "",
        RUC: "",
    })

    const {NOM_USR, CORREO, CONTRA,NOM,FH_CREACION, PAIS, RUC} =datos;

    const onInputChange = e =>{
        console.log(datos);
        setDatos({
            ...datos, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async  e => {
        const response = await fetch(`https://genium-backend.herokuapp.com/usuarios` , {
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
                FH_CREACION: datos["FH_CREACION"],
                PAIS: datos["PAIS"],
                RUC: datos["RUC"],
            })
        })

    }

    /*
        CO_USR: "",
        NOM_USR: "",
        CORREO: "",
        CONTRA: "",
        NOM: "",
        AP_PAT: "",
        AP_MAT: "",
        FH_NACIMIENTO:"",
        FH_CREACION: "",
         */

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
                    <div class="mb-3">
                        <label for="FH_CREACION" class="form-label">Fecha Creación</label>
                        <input type="date" class="form-control" name="FH_CREACION" value={FH_CREACION} onChange={e=>onInputChange(e)}/>
                    </div>
                </div>

                <div className="container-fluid mt-4">
                    <h3 className="mb-2">Datos de la entidad </h3>
                    <div class="mb-3">
                        <label for="NOM_USR" class="form-label">Nombre de la entidad</label>
                        <input type="text" class="form-control" name="NOM" value={NOM} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div class="mb-3">
                        <label for="PAIS" class="form-label">Pais</label>
                        <input type="text" class="form-control" name="PAIS" value={PAIS} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div class="mb-3">
                        <label for="RUC" class="form-label">RUC</label>
                        <input type="text" class="form-control" name="RUC" value={RUC} onChange={e=>onInputChange(e)}/>
                        <label for="AP_PAT" class="form-label">RUC: </label>
                        <input type="number" class="form-control" name="RUC" value={RUC} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div class="mb-3">
                        <label for="AP_MAT" class="form-label">Pais</label>
                        <input type="text" class="form-control" name="PAIS" value={PAIS} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div className="text-center mb-4">
                        <button type="submit" className="btn btn-primary my-2">Regístrate</button>
                    </div>
                </div>
                <div className="container-fluid mt-4 text-center mb-5">
                    <button className="btn btn-success">Registrar</button>
                </div>
            </form>
        </div>
    </>
    

}
export default RegistroEntidad