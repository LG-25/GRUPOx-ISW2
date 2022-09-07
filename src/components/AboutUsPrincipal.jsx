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
                            <img src="https://github.com/LG-25/GRUPOx-ISW2/blob/main/public/P1370579-1024x535.jpg?raw=true" alt="Imagen para el acerca de nosotros"></img>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                    <div class="about-five-content">
                        <h6 class="small-title text-lg">OUR STORY</h6>
                        <h2 class="main-title fw-bold">Our team comes with the experience and knowledge</h2>
                        <div class="about-five-tab">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class={state["boton1"]} id="boton1" type="button" onClick={evento => {
                                        evento.preventDefault();
                                        handleClick(evento);
                                    }}>Who We Are</button>
                                    <button class={state["boton2"]} id="boton2" type="button" onClick={evento => {
                                        evento.preventDefault();
                                        handleClick(evento);
                                    }}>our Vision</button>
                                    <button class={state["boton3"]} id="boton3" type="button" onClick={evento => {
                                        evento.preventDefault();
                                        handleClick(evento);
                                    }}>our History</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class={state["texto1"]} id="nav-who" role="tabpanel" aria-labelledby="nav-who-tab">
                                <p> Texto de quienes somos</p>
                                <p> Un poco de texto argumentativo.</p>
                                </div>
                                <div class={state["texto2"]} id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                    when
                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, look like readable English.</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                    form,
                                    by injected humour.</p>
                                </div>
                                <div class={state["texto3"]} id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                    when
                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, look like readable English.</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                    form,
                                    by injected humour.</p>
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