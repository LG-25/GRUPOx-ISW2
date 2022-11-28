import React, { useState } from 'react'

const AboutUsPrincipal = () => {
    let estadoInicial = {
        "boton1" : "nav-link active" , 
        "texto1" : "tab-pane fade show active", 
        "boton2" : "nav-link" , 
        "texto2" : "tab-pane fade" , 
        "boton3" : "nav-link" , 
        "texto3" : "tab-pane fade" }

    const [state, setState] = useState(estadoInicial);

    function handleClick(e){
        if(e.target.id === "boton1"){
            setState({
                "boton1" : "nav-link active" , 
                "texto1" : "tab-pane fade show active", 
                "boton2" : "nav-link" , 
                "texto2" : "tab-pane fade" , 
                "boton3" : "nav-link" , 
                "texto3" : "tab-pane fade" })
        }
        else if(e.target.id === "boton2"){
            setState({
                "boton1" : "nav-link" , 
                "texto1" : "tab-pane fade", 
                "boton2" : "nav-link active" , 
                "texto2" : "tab-pane fade show active" , 
                "boton3" : "nav-link" , 
                "texto3" : "tab-pane fade" }
            )
        }
        else if(e.target.id === "boton3"){
            setState({
                "boton1" : "nav-link" , 
                "texto1" : "tab-pane fade", 
                "boton2" : "nav-link" , 
                "texto2" : "tab-pane fade" , 
                "boton3" : "nav-link active" , 
                "texto3" : "tab-pane fade show active" }
            )
        }
    }

    return (
        <section class="about-area about-five">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-12">
                        <div class="about-image-five">
                            <img src="https://raw.githubusercontent.com/LG-25/GRUPOx-ISW2/24e96aff95ea560b7fb81e95176ef208961ffab1/public/principal.jpg" alt="Imagen para el acerca de nosotros"></img>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                    <div class="about-five-content">
                        <h6 class="small-title text-secondary">Sobre Nosotros</h6>
                        <h2 class="main-title fw-bold">Nuestro equipo al servicio de la sociedad</h2>
                        <div class="about-five-tab ">
                            <nav>
                                <div class="nav nav-" id="nav-tab" role="tablist">
                                    <button class={state["boton1"]} id="boton1" type="button" onClick={evento => {
                                        evento.preventDefault();
                                        handleClick(evento);
                                    }}>Quienes somos</button>
                                    <button class={state["boton2"]} id="boton2" type="button" onClick={evento => {
                                        evento.preventDefault();
                                        handleClick(evento);
                                    }}>Visión</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class={state["texto1"]} id="nav-who" role="tabpanel" aria-labelledby="nav-who-tab">
                                <p> Somos alumnos de la Universidad de Lima que estamos en busqueda de promoveer, articular y difundir todas las actividades vinculadas con el desarrollo de la sociedad en el país, el nacimiento de nuevas iniciativas sociales y el fortalecimiento de un ecosistema saludable que contribuya con el crecimiento del país y el bienestar de la sociedad.
                                Con esta finalidad, desarrollamos Genium, una plataforma web que busca visibilizar eventos sociales.
                                </p>
                                </div>
                                <div class={state["texto2"]} id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                <p>Ser una plataforma web que este al servicio de las organizaciones que tienen como fin organizar eventos que contribuyan al desarrollo de la sociedad.</p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsPrincipal