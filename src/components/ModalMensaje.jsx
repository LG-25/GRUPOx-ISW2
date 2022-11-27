import react from "react";
import { useState} from "react";
import "../css/modal.css"

    /*Estilo Modal*/
    

const ModalMensaje = (props)=>{
    
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={()=>props.closeModal(false)}> X </button>
                </div>
                <div className="body">
                    <p>
                        Se registrarán los cambios realizados
                    </p>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={()=>props.closeModal(false)}>Cancelar</button>
                    <button id="submitBtn" onClick={()=>props.confirmar()}>Confirmar</button>
                </div>
            </div>
        </div>
    )
    
}

export default ModalMensaje;