
export class Evento{
    constructor(nu_evnt, no_evnt, qt_pers, qt_hrs, desc_event, ubic, fh_inicio, fh_fin, url_evnt, fg_vig, url_foto){
        this.nu_evnt    = nu_evnt;
        this.no_evnt    = no_evnt;
        this.qt_pers    = qt_pers;
        this.qt_hrs     = qt_hrs;
        this.desc_event  = desc_event;
        this.ubic       = ubic;
        this.fh_inicio  = fh_inicio;
        this.fh_fin     = fh_fin;
        this.url_evnt   = url_evnt;
        this.fg_vig     = fg_vig;
        this.url_foto   = url_foto;
    }

    static async update(body){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({   
                NO_EVNT     : body.no_evnt, 
                QT_PERS     : body.qt_pers,  
                QT_HRS      : body.qt_hrs,   
                DESC_EVENT  : body.desc_event,
                UBIC        : body.ubic,     
                FH_INICIO   : body.fh_inicio,
                FH_FIN      : body.fh_fin,   
                URL_EVNT    : body.url_evnt, 
                FG_VIG      : body.fg_vig,
                URL_FOTO    : body.url_foto
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${body.no_evnt}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el evento')
        }else{
            return response.json()
        }
    }

    // * Llamamos al controlador del lado del backend para que haga la eliminación del evento
    static async delete(){
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${this.no_evnt}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error('No se pudo eliminar el evento');
        }
    }
    /**
     * * Funcion que traer todos los eventos de la base de datos
     */
    static async obtenerEventos(){
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos`);
        // response.ok devuelve true o false
        // dependiendo del exito de la operacion
        if (!response.ok) {
            //lanzamos error si no se pudo
            throw new Error('No se pudo obtener todos los eventos')
        } else {
            // devolvemos la consulta
            const eventosJson = await response.json();
            const eventos = eventosJson.map(evento => {
                return(
                    //constructor(nu_evnt, no_evnt, qt_pers, qt_hrs, desc_evnt, ubic, fh_inicio, fh_fin, url_evnt, fg_vig)
                    new Evento(
                        evento.NU_EVNT, 
                        evento.NO_EVNT, 
                        evento.QT_PERS, 
                        evento.QT_HRS,
                        evento.DESC_EVENT,
                        evento.UBIC,
                        evento.FH_INICIO,
                        evento.FH_FIN,
                        evento.URL_EVNT,
                        evento.FG_VIG,
                        evento.URL_FOTO
                    )
                )
            })
            return eventos
        }
    }
    // ! Función que buesca evento a través de su numero de evento
    static async ObtenerEvento(no_evnt){
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${no_evnt}`);
        // response.ok devuelve true o false
        // dependiendo del exito de la operacion
        if (!response.ok) {
            //lanzamos error si no se pudo
            throw new Error('No se pudo obtener el evento')
        } else {
            // devolvemos la consulta
            const eventosJson = await response.json();
            const eventos = eventosJson.map(evento => {
                return(
                    //constructor(nu_evnt, no_evnt, qt_pers, qt_hrs, desc_evnt, ubic, fh_inicio, fh_fin, url_evnt, fg_vig)
                    new Evento(
                        evento.NU_EVNT, 
                        evento.NO_EVNT, 
                        evento.QT_PERS, 
                        evento.QT_HRS,
                        evento.DESC_EVENT,
                        evento.UBIC,
                        evento.FH_INICIO,
                        evento.FH_FIN,
                        evento.URL_EVNT,
                        evento.FG_VIG,
                        evento.URL_FOTO
                    )
                )
            })
            return eventos
        }
    }
    
    // Función que busca los evento de una misma entidad a través de su codigo de entidad
    static async ObtenerEventosEntidad(co_usr){
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${co_usr}`);
        // response.ok devuelve true o false
        // dependiendo del exito de la operacion
        if (!response.ok) {
            //lanzamos error si no se pudo
            throw new Error('No se pudo obtener el evento')
        } else {
            // devolvemos la consulta
            const eventoJson = await response.json();
            const evento = 
                    //constructor(nu_evnt, no_evnt, qt_pers, qt_hrs, desc_evnt, ubic, fh_inicio, fh_fin, url_evnt, fg_vig)
                    new Evento(
                        eventoJson.NO_EVNT, 
                        eventoJson.NU_EVNT, 
                        eventoJson.QT_PERS, 
                        eventoJson.QT_HRS,
                        eventoJson.DESC_EVENT,
                        eventoJson.UBIC,
                        eventoJson.FH_INICIO,
                        eventoJson.FH_FIN,
                        eventoJson.URL_EVNT,
                        eventoJson.FG_VIG,
                        eventoJson.URL_FOTO
                    )
            return evento
        }
    }
}
