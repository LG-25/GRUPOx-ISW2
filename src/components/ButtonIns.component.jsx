const ButtonIns=(props)=>{
    const butOnClick=()=>{
        props.onRegis()
        //navegar(link)
    }
    return <button id="" className={props.color} onClick={butOnClick} >{props.nombre}</button>
}
export default ButtonIns