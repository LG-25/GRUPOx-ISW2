import { logDOM } from '@testing-library/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Sidebar.css"


export const Sidebar = () =>{
    return(
        <div className="wrapper d-flex">
            <div className="sidebar">
                <small className="text-muted px-3">Gestion Eventos</small>
                <ul>
                    <li><a href="../catalogoEventos"><i class="far fa-credit-card"></i>Catalogo Eventos</a></li>
                    <li><a href="../misEventosUsuarioI"><i class="far fa-credit-card"></i>Eventos Inscritos</a></li>
                </ul>
                <small className="text-muted px-3">Usuario</small>
                <ul>
                    <li><a href="../EditarUsuarioI"><i className="fas fa-external-link-alt"></i>Modificar</a></li>
                    <li>
                        <a href="#" onClick={() => {
                            sessionStorage.removeItem("user");
                            window.location.href = '/';
                        }}><i className="fas fa-code"></i>Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


// export const Sidebar = () => {
//   return (
//     <div classNameName="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
//         <a href="/" classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//             <svg classNameName="bi me-2" width="40" height="32"></svg>
//             <span classNameName="fs-4">Sidebar</span>
//         </a>
//         <hr/>
//         <ul classNameName="nav nav-pills flex-column mb-auto">
//             <li classNameName="nav-item">
//                 <a href="#" classNameName="nav-link active" aria-current="page">
//                     <svg classNameName="bi me-2" width="16" height="16"></svg>
//                     Home
//                 </a>
//             </li>
//             <li>
//                 <a href="#" classNameName="nav-link text-white">
//                     <svg classNameName="bi me-2" width="16" height="16"></svg>
//                     Dashboard
//                 </a>
//             </li>
//             <li>
//                 <a href="#" classNameName="nav-link text-white">
//                     <svg classNameName="bi me-2" width="16" height="16"></svg>
//                     Orders
//                 </a>
//             </li>
//             <li>
//                 <a href="#" classNameName="nav-link text-white">
//                     <svg classNameName="bi me-2" width="16" height="16"></svg>
//                     Products
//                 </a>
//             </li>
//             <li>
//                 <a href="#" classNameName="nav-link text-white">
//                     <svg classNameName="bi me-2" width="16" height="16"></svg>
//                     Customers
//                 </a>
//             </li>
//         </ul>
//         <hr/>
//         <div classNameName="dropdown">
//             <a href="#" classNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                 <img src="https://github.com/mdo.png" alt="" width="32" height="32" classNameName="rounded-circle me-2"/>
//                 <strong>mdo</strong>
//             </a>
//             <ul classNameName="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
//                 <li><a classNameName="dropdown-item" href="#">New project...</a></li>
//                 <li><a classNameName="dropdown-item" href="#">Settings</a></li>
//                 <li><a classNameName="dropdown-item" href="#">Profile</a></li>
//                 <li><hr classNameName="dropdown-divider"/></li>
//                 <li><a classNameName="dropdown-item" href="#">Sign out</a></li>
//             </ul>
//         </div>
//   </div>
//   )
// }
