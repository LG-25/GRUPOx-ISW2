import { Redirect } from "react-router-dom";
import MainUsuario from "../components/MainUsuario"

const InicioUsuario= ()=>{
    let co_usr = sessionStorage.getItem("user");
    
    return(
        <>
        {co_usr === null ? <Redirect to = "/"></Redirect> : <MainUsuario/> }
        </>
    )

}

export default InicioUsuario