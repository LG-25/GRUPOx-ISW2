import React from 'react'
import { Link } from 'react-router-dom'

const HeadPrincipal = () => {
  return (
    <section id="hero-area" class="header-area header-eight">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12 col-12">
                <div class="header-content">
                  <h1>Corporate &amp; Business Site Template by Ayro UI.</h1>
                  <p>
                    We are a digital agency that helps brands to achieve their
                    business outcomes. We see technology as a tool to create amazing
                    things.
                  </p>
                  <div class="button">
                    <Link to ="/catalogoEventos">
                        <a class="btn primary-btn">Catalogo de eventos</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-12">
                <div class="header-image">
                  <img src="assets/images/header/hero-image.jpg" alt="imagen chévere, puede ser el logo"/>
                </div>
              </div>
            </div>
          </div>
      </section>

  )
}

export default HeadPrincipal