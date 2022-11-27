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

    const validar = _ =>{
        if(datos["NOM_USR"] === "") return false;
        if(datos["CORREO"] === "") return false;
        if(datos["CONTRA"] === "") return false;
        if(datos["PAIS"] === "") return false;
        if(datos["RUC"] === "") return false;
        return true; 
    }

    const onClick = async  e => {
        e.preventDefault();
        if(!validar()){
            alert("Debe completar toda la información del cliente");
            return;
        }

        const response = await fetch(`https://genium-backend.herokuapp.com/usuario` , {
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
                FH_CREACION: Date.now(),
                PAIS: datos["PAIS"],
                RUC: datos["RUC"],
            })
        })
        if(response.ok){
            alert("Se ha creado el usuario satisfactoriamente");
            window.location.href = '/LoginUsuario'
        }
        else{
            alert("Ha ocurrido un error con la petición")
        }
    }

    return <>
        <div className="container-fluid">
            <h1 className="my-4 text-center"> ¡Regístrate! </h1>

            
            <form className="container-fluid" >

                <div className="container-fluid">
                    <h3 className="mb-2">Datos de la cuenta</h3>
                    <div class="mb-3">
                        <label  class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" name="NOM_USR" value={NOM_USR} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Correo</label>
                        <input type="email" class="form-control" name="CORREO" value={CORREO} onChange={e=>onInputChange(e)} aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Contraseña</label>
                        <input type="password" class="form-control" name="CONTRA" value={CONTRA} onChange={e=>onInputChange(e)}/>
                    </div>
                </div>

                <div className="container-fluid mt-4">
                    <h3 className="mb-2">Datos de la entidad </h3>
                    <div class="mb-3">
                        <label  class="form-label">Nombre de la entidad</label>
                        <input type="text" class="form-control" name="NOM" value={NOM} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Pais</label>
                        <input type="text" class="form-control" name="PAIS" value={PAIS} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">RUC</label>
                        <input type="text" class="form-control" name="RUC" value={RUC} onChange={e=>onInputChange(e)}/>
                    </div>
                    <div className="text-center mb-4">
                        <button className="btn btn-primary my-2" onClick={onClick}>Regístrate</button>
                    </div>
                </div>
            </form>
        </div>
    </>
    

}
export default RegistroEntidad