import { useState, useEffect } from "react"
import { ServiciosUsuarioI } from "../services/ServiciosUsuario.js"
import { Sidebar } from "../components/Sidebar.jsx"
import ModaleditE from "../components/ModaleditE.component.jsx"
const EditarUsuarioE=()=>{
    //const [datos, setDatos]= useState([])
    //const [openModal, setOpenModal]= useState(true);
    const [usuario, setUsuario] = useState([])
    // Solamente se realizará una vez el useState
    let usr = sessionStorage.getItem("userEN");

    console.log("usr: "+ usr);
    useEffect(() => {
        ServiciosUsuarioI.ObtenerUsuarioE(usr)
            .then(result => {
                setUsuario(result)
            })
    }, [])

    console.log("usuario: " + JSON.stringify(usuario));

    
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col">
                <div className="d-flex flex-column flex-shrink-0 container mt-3 justify-content-center">
                <ModaleditE user = {usuario}></ModaleditE>
                </div>
            </div>
        </div>
    )
}
export default EditarUsuarioE