import { useState, useEffect } from "react"
import { ServiciosUsuarioI } from "../services/ServiciosUsuario.js"
import Modaledit from "../components/Modaledit.component.jsx"
import { Sidebar } from "../components/Sidebar.jsx"
import { useParams } from "react-router-dom"
const EditarUsuario=()=>{
    //const [datos, setDatos]= useState([])
    //const [openModal, setOpenModal]= useState(true);
    const [usuario, setUsuario] = useState([])
    const {co_usr}= useParams();
    // Solamente se realizará una vez el useState
    useEffect(() => {
        ServiciosUsuarioI.ObtenerUsuarioI(co_usr)
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
                <Modaledit user = {usuario}></Modaledit>
                </div>
            </div>
        </div>
    )
}
export default EditarUsuario