
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Evento } from '../services/ServiciosEvento.js'
import ModalDetalleEvento from './ModalDetalleEvento.jsx';
import ModalQr from './ModalQr.jsx';
import { ReactNode } from 'react';
import { ParticipantesEvento } from '../services/ServiciosParticipanteEvento.js';
import jsPDF from 'jspdf';

export const CartaEvento = (props) => {
  const co_usr = sessionStorage.getItem("user");
  const evento = props.evento;
  const dayI = new Date(evento.fh_inicio)
  const dayF = new Date(evento.fh_fin)  
  const [debeMostrarModal, setDebeMostrarModal] = useState(false)
  const [txtDescription, setDescription]= useState("")
  const [txtLink, setLink]= useState("")
  
  const butonClick1 = () =>{
    ParticipantesEvento.CambiarEstadoParticipante(evento.nu_evnt , co_usr, '2')
      .then((result) => {
        alert("Se ha confirmado la asistencia")
        window.location.href = "/misEventosUsuarioI"
      },
      (error) =>{
        alert("ha ocurrido un error al actualizar el estado")
        console.log(error);
      })
  }
  
  const butOnClick2 =()=>{
    setDebeMostrarModal(true)
    //setDescription(evento.desc_event)
  }
  const butonClick3 = () =>{
    var doc = new jsPDF();
    doc.setFontSize(40);
    doc.text("Esto es un certificado", 35, 25);
    doc.text("de prueba", 35, 65);
    doc.save("certificado.pdf");
  }

  const butOnClick =()=>{
    setDebeMostrarModal(true)
    //setDescription(evento.desc_event)
  }
  const butOnClick3 =()=>{
    let user = sessionStorage.getItem("user");
    ParticipantesEvento.EliminarParticipanteEvento(evento.nu_evnt,user)
    .then((result) => {
      alert("Se ha eliminado el evento de la lista de 'Mis eventos'")
      window.location.href = "/misEventosUsuarioI"
    },
    (error) =>{
      alert("ha ocurrido un error al eliminar el evento")
      console.log(error);
    })
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
        <ModalDetalleEvento nro={evento.nu_evnt} nombre={evento.no_evnt} qHoras={evento.qt_hrs} ubic={evento.ubic} qPers={evento.qt_pers} url={evento.url_evnt} inicio={evento.fh_inicio} fin={evento.fh_fin}  mostrar={debeMostrarModal} ocultar={onModalClose}></ModalDetalleEvento>
      </div>

        //Aqui presentes Ricardo y Fabrizio

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
          {evento.co_estd === 1 && <><a href="#" className="btn btn-primary" onClick={butonClick1}>Confirmar Asistencia</a>
          <div className='mt-2'><button type="button" className="btn btn-danger" onClick={butOnClick3}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
            </svg> ELIMINAR
          </button></div></>}
          {evento.co_estd === 2 && <><a href="#" className="btn btn-primary" onClick={butOnClick2}>Ver QR</a>
          <div className='mt-2'><button type="button" className="btn btn-danger" onClick={butOnClick3}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
            </svg> ELIMINAR
          </button></div></>}
          {evento.co_estd === 3 && <a href="#" className="btn btn-primary" onClick={butonClick3}>Mostrar Certificado</a>}
        </div>
          <ModalQr nu_evnt={evento.nu_evnt} mostrar={debeMostrarModal} ocultar={onModalClose}></ModalQr>
      </div>
    )
  }
  
}
