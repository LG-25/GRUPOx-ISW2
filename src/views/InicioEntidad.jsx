import { Redirect } from "react-router-dom";
import MainEntidad from "../components/MainEntidad"

const InicioEntidad = ()=>{

    let co_usr = sessionStorage.getItem("userEN");

    return(
        <>
        {
            co_usr===null ? <Redirect to='/'></Redirect> : <MainEntidad/>
        }
        </>
    )

}

export default InicioEntidad