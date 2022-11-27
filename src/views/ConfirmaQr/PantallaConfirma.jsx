import { queryByTestId } from '@testing-library/react';
import React from 'react'
import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { ParticipantesEvento } from '../../services/ServiciosParticipanteEvento';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// pantallaConfirma?nu_evnt=1&co_usr=2
const PantallaConfirma = () => {
  let query = useQuery();
  let nu_evnt = query.get("nu_evnt");
  let co_usr = query.get("co_usr");
  let usr = localStorage.getItem("userConfirma")

  const confirma = async _ => {
    const res = await ParticipantesEvento.ConfirmarQrParticipante(nu_evnt , co_usr)
    if(res.ok){
      alert("Se ha actualizado el estado del participante")
      window.location.href = '/'
    }
    else{
      alert("Ha ocurrido un error con la petición")
    }
  }

  const cancelar = _ =>{
      window.location.href = '/';
  }

  return (
    <>
      {usr === null && <Redirect to="/signupConfirma"></Redirect>}
        <div>
          <div className="container p-5 mw-100 h-100">
              <div className="row  align-items-center h-100">
                  <div className="col-6 border mx-auto">
                      <div className="card h-100 justify-content-center"></div>
                        <h2 className = "p-5 text-center" > ¿Desea confimar asistencia? </h2>
                        <div className='pb-5 mx-auto text-center'>
                          <button type="button" class="btn btn-primary btn-lg m-5" onClick={confirma}>Confirmar</button>
                          <button type="button" class="btn btn-secondary btn-lg" onClick={cancelar}>Cancelar</button>
                        </div>
                      </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default PantallaConfirma