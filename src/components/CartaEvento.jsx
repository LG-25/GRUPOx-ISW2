<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Evento } from '../services/ServiciosEvento.js'
=======
import React, { useEffect, useState } from 'react'
import { Evento } from '../classes/Evento.js'
import ModalDetalleEvento from './ModalDetalleEvento.jsx';
>>>>>>> ea9e105 (Detalle evento implementado)
=======
import React, { useEffect, useState } from 'react'
import { Evento } from '../classes/Evento.js'
import ModalDetalleEvento from './ModalDetalleEvento.jsx';
>>>>>>> df89a54 (Detalle evento implementado)

export const CartaEvento = (props) => {
  const evento = props.evento;
  const dayI = new Date(evento.fh_inicio)
  const dayF = new Date(evento.fh_fin)

  const [debeMostrarModal, setDebeMostrarModal] = useState(false)
  const [txtDescription, setDescription]= useState("")
  const [txtNombre, setNombre]= useState("")
  const butOnClick =()=>{
    setDebeMostrarModal(true)
    setDescription(evento.desc_event)
  }
  const onModalClose = ()=>{
    setDebeMostrarModal(false)
  }
  
  return (
    <div className="card mx-2 my-3" style={{ "width": 18 + 'rem' }}>
      <img src={evento.url_foto} className="card-img-top" alt="imagen o fondo de evento" />
      <div className="card-body">
        <h4 className="card-title text-center">{evento.no_evnt}</h4>
        <p clasName="card-text">Ubicación: {evento.ubic}</p>
        <p clasName="card-text">Max personas: {evento.qt_pers}</p>
        <p clasName="card-text">Fecha Inicio: {dayI.toLocaleDateString()}</p>
        <p clasName="card-text">Fecha Fin: {dayF.toLocaleDateString()}</p>
        <a href="#" className="btn btn-primary" onClick={butOnClick}>Ver detalles</a>
      </div>
      <ModalDetalleEvento nombre={evento.no_evnt} desc ={txtDescription} qHoras={evento.qt_hrs} ubic={evento.ubic} qPers={evento.qt_pers} url={evento.url_evnt} inicio={evento.fh_inicio} fin={evento.fh_fin}  mostrar={debeMostrarModal} ocultar={onModalClose}></ModalDetalleEvento>
    </div>
  )
}
