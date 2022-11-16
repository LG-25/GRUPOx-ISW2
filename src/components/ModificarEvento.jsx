import { useEffect, useState } from 'react';
import { Evento } from '../services/ServiciosEvento.js'
import ModalEditar from './ModalEditar';
import React from 'react'



const ModificarEvento = (props) => {
    
    
    const eventoM = props.events;

    const evento = new Evento()
    const [EvNom, setEvNom] = useState('');
    const [CantP, setCantP] = useState('');
    const [CantH, setCantH] = useState('');
    const [Desc, setDesc] = useState('');
    const [Ubi, setUbi] = useState('');
    //const [FecIni, setFecIni] = useState('');
    //const[FecFin, setFecFin] = useState('');
    const[Url, setUrl] = useState('');
    //cambiar en el formulario vigencia por texto y no booleano
    const[Vig, setVig] = useState('');
    const[Foto, setFoto] = useState('');
    const [openModal, setOpenModal]= useState(false);
        
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
    const btnConfirmarOnClick=()=>{
        evento.update(10, 
            [EvNom, CantP, CantH, Desc, Ubi, /*FecIni, FecFin,*/ Url, Vig, Foto]);
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
                  <input type="text" defaultValue={eventoM.EvNom} className="form-control" onChange={EvNomOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Aforo del evento</label>
                  <input type="text" defaultValue={eventoM.CantP} className="form-control" onChange={CantPOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Duración del evento</label>
                  <input type="text" defaultValue={eventoM.CantH} className="form-control" onChange={CantHOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Información adicional del evento</label>
                  <input type="text" defaultValue={eventoM.Desc} className="form-control" onChange={DescOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Fecha de inicio del evento</label>
                  <input type="text" defaultValue={eventoM.FecIni} className="form-control" onChange={FecIniOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Fecha de fin del evento</label>
                  <input type="text" defaultValue={eventoM.FecFin} className="form-control" onChange={FecFinOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">URL del evento</label>
                  <input type="text" defaultValue={eventoM.Url} className="form-control" onChange={UrlOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Vigencia del evento</label>
                  <input type="text" defaultValue={eventoM.Vig} className="form-control" onChange={VigOnChange}/>
                </div>

                <div className="input-group-sm mb-2">
                  <label for="" className="form-label">Foto del evento</label>
                  <input type="text" defaultValue={eventoM.Foto} className="form-control" onChange={FotoOnChange}/>
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
        <ModalEditar 
            closeModal={setOpenModal} 
            confirmar={btnConfirmarOnClick}>
        </ModalEditar>
        }
    </div>
}



export default ModificarEvento;