import { useState, useEffect } from "react"
import { ServiciosUsuarioI } from "../services/ServiciosUsuario.js"
import Modaledit from "../components/Modaledit.component.jsx"
const EditarUsuario=()=>{
    //const [datos, setDatos]= useState([])
    //const [openModal, setOpenModal]= useState(true);
    const [usuario, setUsuario] = useState([])
    
    // Solamente se realizará una vez el useState
    useEffect(() => {
        ServiciosUsuarioI.ObtenerUsuarioI(1)
            .then(result => {
                setUsuario(result)
            })
    }, [])

    console.log(usuario);
    return (
        <div className="container">
            <Modaledit user = {usuario}></Modaledit>
        </div>
    )
}
export default EditarUsuario