
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
          <a href="#" className="btn btn-primary mt-2" onClick={butOnClick3}>Eliminar</a></>}
          {evento.co_estd === 2 && <><a href="#" className="btn btn-primary" onClick={butOnClick2}>Ver QR</a>
          <a href="#" className="btn btn-primary mt-2" onClick={butOnClick3}>Eliminar</a></>}
          {evento.co_estd === 3 && <a href="#" className="btn btn-primary" onClick={butonClick3}>Mostrar Certificado</a>}
        </div>
          <ModalQr nu_evnt={evento.nu_evnt} mostrar={debeMostrarModal} ocultar={onModalClose}></ModalQr>
      </div>
    )
  }
  
}
