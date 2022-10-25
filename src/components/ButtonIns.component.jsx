const ButtonIns=(props)=>{
    const butOnClick=()=>{
        props.onRegis();
        props.onRegis()
        //navegar -> (link)
        //navegar(link)
    }
    return <button id="" className={props.color} onClick={butOnClick} >{props.nombre}</button>
}
export default ButtonIns