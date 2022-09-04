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
        <HeadPrincipal></HeadPrincipal>
        <AboutUsPrincipal></AboutUsPrincipal>
    </>
    )
}

export default Principal
