import { useState } from "react"
import Modaledit from "../components/Modaledit.component.jsx"

const EditarUsuario=()=>{
    const [datos, setDatos]= useState([])
    
    return (
        <div className="container">
            <Modaledit></Modaledit>
        </div>
    )
}
export default EditarUsuario