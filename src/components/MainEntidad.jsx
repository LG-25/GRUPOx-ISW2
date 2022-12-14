import React from 'react'
import { Link } from 'react-router-dom'

const MainEntidad = () => {
  return (
    <section id="hero-area" class="header-area header-eight">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12 col-12">
                <div class="header-content">
                  <h1>¡Bienvenido usuario Entidad!</h1>
                  <p>
                    We are a digital agency that helps brands to achieve their
                    business outcomes. We see technology as a tool to create amazing
                    things.
                  </p>
                </div>
              </div>
              <div className='col-2'>

              </div>
              <div className="col-lg-4 col-md-12 col-12">
                  <div className="row">
                    <div class="button">
                      <Link to ="/RegistroEvento">
                          <a class="btn primary-btn w-100">Registrar Evento</a>
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div class="button">
                      <Link to ="/misEventos">
                          <a class="btn primary-btn w-100">Mi Catálogo de eventos</a>
                      </Link>
                    </div>
                  </div>
                  <div className="row ">
                    <div class="button ">
                      <Link to ="/editarUsuario">
                          <a class="btn primary-btn w-100">Editar información</a>
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </section>

  )
}

export default MainEntidad