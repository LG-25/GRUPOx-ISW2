import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Sidebar.css"


export const Sidebar = () =>{
    return(
        <div class="wrapper d-flex">
            <div class="sidebar">
                <small class="text-muted px-3">Gestion Eventos</small>
                <ul>
                <li><a href="#"><i class="fas fa-home"></i>Registrar Evento</a></li>
                    <li><a href="#"><i class="fas fa-home"></i>Mi Catalogo de Eventos</a></li>
                    <li><a href="#"><i class="far fa-credit-card"></i>Editar Evento</a></li>
                </ul>
                <small class="text-muted px-3">Usuario</small>
                <ul>
                    <li><a href="#"><i class="fas fa-external-link-alt"></i>Editar Informacion</a></li>
                    <li><Link to="/">
                        <a href="#"><i class="fas fa-code"></i>Cerrar sesión</a>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

