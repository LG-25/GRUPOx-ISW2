import { useEffect, useState } from 'react';
import { Evento } from '../services/ServiciosEvento.js'
import React from 'react'
import ModalMensaje from './ModalMensaje.jsx';



const ModificarEvento = (props) => {
    
    
    const eventoM = props.events;
    const [EvNom, setEvNom] = useState("");
    const [CantP, setCantP] = useState("");
    const [CantH, setCantH] = useState("");
    const [Desc, setDesc] = useState("");
    const [Ubi, setUbi] = useState("");
    const [FecIni, setFecIni] = useState("");
    const[FecFin, setFecFin] = useState("");
    const[Url, setUrl] = useState("");
    //cambiar en el formulario vigencia por texto y no booleano
    const[Vig, setVig] = useState("");
    const[Foto, setFoto] = useState("");
    const [openModal, setOpenModal]= useState(false);
    
    useEffect(() => {
      if (eventoM.no_evnt != null) {
        setEvNom(eventoM.no_evnt);
        setCantP(eventoM.qt_pers);
        setCantH(eventoM.qt_hrs);
        setDesc(eventoM.desc_event);
        setUbi(eventoM.ubic);
        setFecIni(eventoM.fh_inicio);
        setFecFin(eventoM.fh_fin);
        setUrl(eventoM.url_evnt);
        setVig(eventoM.fg_vig);
        setFoto(eventoM.url_foto);
      }
    }, [eventoM.no_evnt])


    const EvNomOnChange = (e) => {
        setEvNom(e.target.value);
      };
    const CantPOnChange = (e) =>{
        setCantP(e.target.value);
    }
    const CantHOnChange = (e) =>{
        setCantH(e.target.value);
    }
    const DescOnChange = (e) =>{
        setDesc(e.target.value);
    }
    const UbiOnChange = (e) =>{
        setUbi(e.target.value);
    }
    const FecIniOnChange = (e) =>{
        setFecIni(e.target.value);
    }
    const FecFinOnChange = (e) =>{
        setFecFin(e.target.value);
    }
    const UrlOnChange = (e) =>{
        setUrl(e.target.value);
    }
    const VigOnChange = (e) =>{
        setVig(e.target.value);
    }
    const FotoOnChange = (e) =>{
        setFoto(e.target.value);
    }
    const btnOnclick= ()=>{
        setOpenModal(true);
    }
    const change=()=>{
      window.location.href = '/InicioEntidad';
    }
    const btnConfirmarOnClick=()=>{
        Evento.update(eventoM.nu_evnt,EvNom, CantP, CantH, Desc, Ubi, FecIni, FecFin, Url, Vig, Foto).then( () => {
          window.location.href = '/InicioEntidad';;
        })
       
        
      }
  
    return <div className="row container mt-5">
      <div className="row justify-content-center">
        <div className="col" />
        <div className="col-md-5 table-responsive">
          <aside>
            <div className="card bg-secondary text-black">
              <div className="card-body">
                <div className="row">
                  <div className="col"> </div>
                  <div className="col-8">
                    <h3 className="text-center">Editar el detalle del evento</h3>
                  </div>
                  <div className="col"> </div>
                </div>
{/*EvNom, CantP, CantH, Desc, Ubi, FecIni, FecFin, Url, Vig, Foto*/}
                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Nombre del Evento</label>
                  <input type="text" defaultValue={EvNom} className="form-control" onChange={EvNomOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Aforo del evento</label>
                  <input type="text" defaultValue={CantP} className="form-control" onChange={CantPOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Duración del evento</label>
                  <input type="text" defaultValue={CantH} className="form-control" onChange={CantHOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Información adicional del evento</label>
                  <input type="text" defaultValue={Desc} className="form-control" onChange={DescOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Fecha de inicio del evento</label>
                  <input type="text" defaultValue={FecIni} className="form-control" onChange={FecIniOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Fecha de fin del evento</label>
                  <input type="text" defaultValue={FecFin} className="form-control" onChange={FecFinOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">URL del evento</label>
                  <input type="text" defaultValue={Url} className="form-control" onChange={UrlOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Vigencia del evento</label>
                  <input type="text" defaultValue={Vig} className="form-control" onChange={VigOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Foto del evento</label>
                  <input type="text" defaultValue={Foto} className="form-control" onChange={FotoOnChange}/>
                </div>

                <div className="row mt-2 mb-2">
                  <div className="col">
                    <button className="btn btn-primary" onClick={btnOnclick}>Guardar</button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <div className="col" />
      </div>
      {openModal && 
        <ModalMensaje closeModal={setOpenModal} 
        confirmar={btnConfirmarOnClick}>
          
        </ModalMensaje>
        }
    </div>
}



export default ModificarEvento;