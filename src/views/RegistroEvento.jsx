import FormularioEvento from "../components/FormularioEvento"
import InvitacionLink from "../components/InvitacionLink"
import { Sidebar } from "../components/Sidebar"

const RegistroEvento=()=>{
    return (
        <>
        <Sidebar></Sidebar>
        <div className="container">
            <div className="col">
                <FormularioEvento></FormularioEvento>  
            </div>           
        </div>
        </>
    )
}



export default RegistroEvento