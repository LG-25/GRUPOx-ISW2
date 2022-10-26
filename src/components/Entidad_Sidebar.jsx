import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Sidebar.css"


export const Sidebar = () =>{
    return(
        <div className="wrapper d-flex">
            <div className="sidebar">
                <small className="text-muted px-3">Gestion Eventos</small>
                <ul>
                    <li><a href="#"><i className="fas fa-home"></i>Registrar Evento</a></li>
                    <li><a href="#"><i className="fas fa-home"></i>Mi Catalogo de Eventos</a></li>
                    <li><a href="#"><i className="far fa-credit-card"></i>Editar Evento</a></li>
                </ul>
                <small className="text-muted px-3">Usuario</small>
                <ul>
                    <li><a href="#"><i className="fas fa-external-link-alt"></i>Editar Informacion</a></li>
                    <li>
                        <Link to="/">
                            <i className="fas fa-code"></i>Cerrar sesión
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

