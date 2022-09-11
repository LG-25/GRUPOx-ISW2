import react from "react";
import { useState} from "react";
import "../css/modal.css"

    /*Estilo Modal*/
    

const ModalMensaje = (props)=>{
    
    /*Funciones de las Estrellas Calificacion
    const [valor, setvalor] = useState(0);
    const [valorInvisible, setValorInvisible] = useState(undefined);
    const stars = Array(5).fill(0);

    //funciones para el rating
    const handleClick = value => {
      setvalor(value)
    }
    const handleMouseOver = newvalorInvisible => {
        setValorInvisible(newvalorInvisible)
    };
    
    const handleMouseLeave = () =>{
      setValorInvisible(undefined)
    }
    
  
    const styless = useStyles();
    const[modal, setModal]=useState(false);
    const OpenCloseModal = () =>{
        setModal(!modal);
    }
    */
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
                    <button>Confirmar</button>
                </div>
            </div>
        </div>
    )
    
}

export default ModalMensaje;