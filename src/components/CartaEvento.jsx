import React from 'react'
import { Evento } from '../classes/Evento.js'

export const CartaEvento = (props) => {
  const evento = props.evento;
  const dayI = new Date(evento.fh_inicio)
  const dayF = new Date(evento.fh_fin)
  return (
    <div className="card mx-2 my-3" style={{"width" : 18 + 'rem'}}>
      <img src={evento.url_foto} className="card-img-top" alt="imagen o fondo de evento"/>
        <div className="card-body">
          <h4 className="card-title text-center">{evento.no_evnt}</h4>
          <p clasName="card-text">Ubicación: {evento.ubic}</p>
          <p clasName="card-text">Max personas: {evento.qt_pers}</p>
          <p clasName="card-text">Fecha Inicio: {dayI.toLocaleDateString()}</p>
          <p clasName="card-text">Fecha Fin: {dayF.toLocaleDateString()}</p>
          <a href="#" className="btn btn-primary">Ver detalles</a>
        </div>
    </div>
  )
}
