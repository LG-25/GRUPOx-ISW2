
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Evento } from '../services/ServiciosEvento.js'
import ModalDetalleEvento from './ModalDetalleEvento.jsx';
import ModalQr from './ModalQr.jsx';


export const CartaEvento = (props) => {
  const evento = props.evento;
  const dayI = new Date(evento.fh_inicio)
  const dayF = new Date(evento.fh_fin)

  const [debeMostrarModal, setDebeMostrarModal] = useState(false)
  const [txtDescription, setDescription]= useState("")
  const [txtLink, setLink]= useState("")
  
  const butOnClick2 =()=>{
    setDebeMostrarModal(true)
    //setDescription(evento.desc_event)
  }
  const butOnClick =()=>{
    setDebeMostrarModal(true)
    //setDescription(evento.desc_event)
  }
  const onModalClose = ()=>{
    setDebeMostrarModal(false)
  }
  if(props.tipo =="general"){
    return (
      <div className="card mx-2 my-3" style={{ "width": 18 + 'rem' }}>
        <img src={evento.url_foto} className="card-img-top" alt="imagen o fondo de evento" />
        <div className="card-body">
          <h4 className="card-title text-center">{evento.no_evnt}</h4>
          <p className="card-text">Ubicación: {evento.ubic}</p>
          <p className="card-text">Max personas: {evento.qt_pers}</p>
          <p className="card-text">Fecha Inicio: {dayI.toLocaleDateString()}</p>
          <p className="card-text">Fecha Fin: {dayF.toLocaleDateString()}</p>
          <a href="#" className="btn btn-primary" onClick={butOnClick2}>Ver detalles</a>
        </div>
        <button className="btn btn-primary w-100 text-dark" onClick={()=>butOnClick2()} >Registrarse</button>
                            <Modal
                                open = {debeMostrarModal}
                                onClose={()=>butOnClick2()}>
                                <div className=''>
            <div align="center">
                <div className="fs-4 my-4">¡Registro al evento exitoso!</div>
            </div>
                
            <div align="center">
                <button className="btn btn-primary  w-75" onClick={()=>butOnClick2()}>Regresar</button>
            </div>
                
        </div>
                            </Modal>
        <ModalDetalleEvento nombre={evento.no_evnt} qHoras={evento.qt_hrs} ubic={evento.ubic} qPers={evento.qt_pers} url={evento.url_evnt} inicio={evento.fh_inicio} fin={evento.fh_fin}  mostrar={debeMostrarModal} ocultar={onModalClose}></ModalDetalleEvento>
      </div>
    )
  }else if(props.tipo =="registrado"){
    return (
      <div className="card mx-2 my-3" style={{ "width": 18 + 'rem' }}>
        <img src={evento.url_foto} className="card-img-top" alt="imagen o fondo de evento" />
        <div className="card-body"> 
          <h4 className="card-title text-center">{evento.no_evnt}</h4>
          <p className="card-text">Ubicación: {evento.ubic}</p>
          <p className="card-text">Max personas: {evento.qt_pers}</p>
          <p className="card-text">Fecha Inicio: {dayI.toLocaleDateString()}</p>
          <p className="card-text">Fecha Fin: {dayF.toLocaleDateString()}</p>
          <a href="#" className="btn btn-primary" onClick={butOnClick2}>Ver detalles</a>
        </div>
        <ModalQr nu_evnt={evento.nu_evnt} mostrar={debeMostrarModal} ocultar={onModalClose}></ModalQr>
      </div>
    )
  }
  
}
