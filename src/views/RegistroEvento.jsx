import FormularioEvento from "../components/FormularioEvento"
import InvitacionLink from "../components/InvitacionLink"
import { Sidebar } from "../components/Entidad_Sidebar"
import { Redirect } from "react-router-dom";

const RegistroEvento=()=>{

    let co_usr = sessionStorage.getItem("userEN");

    return (
        
        <>
            {
                co_usr === null ? 
                <Redirect to = "/"></Redirect>
                :
                <>
                <Sidebar></Sidebar>
                <div className="container">
                    <div className="col">
                        <FormularioEvento></FormularioEvento>  
                    </div>           
                </div>
                </>
            }
        </>
    )
}



export default RegistroEvento