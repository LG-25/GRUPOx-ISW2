import React from 'react'
import AboutUsPrincipal from '../components/AboutUsPrincipal'
import HeadPrincipal from '../components/HeadPrincipal'
import "../css/Principal.css"

{/*
  TODO: falta poner un navbar en la parte de arriba donde irán los botones de login 
*/}

const Principal = () => {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="https://github.com/LG-25/GRUPOx-ISW2/blob/main/public/LogoGenium.png?raw=true" alt="" width="35%" />
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/" data-scroll-nav="0">Home</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="#" data-scroll-nav="3">Link</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#" data-scroll-nav="5">Catalogo eventos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/SignupEntidad">Registro Entidad</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/SignUpUsuario" >Registro Invitado</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <section className="header" data-scroll-index="0" data-stellar-background-ratio="0.5">
            <div className="v-middle">
                <div className="container">
                    <div className="row">
                        <div className="caption">
                            <h5>Hello</h5>
                                <h1 className="cd-headline clip">
                                    <span className="blc">We are</span>
                                </h1>
                                <p>Update you</p>
                                <div className="btn-block">
                                    <a  className="btn btn-get-in-touch" title="Get In Touch">
                                        "get in touch"
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
            <div className="svg">
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
            </svg>
            </div>
    </>
    )
}

export default Principal