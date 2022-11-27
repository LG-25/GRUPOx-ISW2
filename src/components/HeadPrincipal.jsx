import React from 'react'
import { Link } from 'react-router-dom'

const HeadPrincipal = () => {
  return (
    <section id="hero-area" class="header-area header-eight">
          <div class="container">
            <div class="row align-items-center">
              <div class='d-inline mb-5'>
              <Link to ="/SignUpUsuario">
                <a class="btn primary-btn">Registro de usuario invitado</a>
              </Link>
              <Link to ="/SignupEntidad">
                <a class="btn primary-btn">Registro de entidad</a>
              </Link>
              <Link to ="/LoginUsuario">
                <a class="btn primary-btn">Login</a>
              </Link>
              </div>
              <div class="col-lg-6 col-md-12 col-12">
                <div class="header-content">
                  <h1>La mejor plataforma para la gestión de eventos sociales</h1>
                  <p>
                    Somos GENIUM!, una plataforma que ayudará en la visibilidad de eventos con fines sociales y podrá colaborar en la gestión de
                    cualquier evento de las distintas ONGs internacionales.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-12">
                <div class="header-image">
                  <img src="https://github.com/LG-25/GRUPOx-ISW2/blob/main/public/LogoGenium.png?raw=true" alt="imagen chévere, puede ser el logo"/>
                </div>
              </div>
            </div>
          </div>
      </section>

  )
}

export default HeadPrincipal