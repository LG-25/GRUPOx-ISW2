
export class Evento{
    constructor(nu_evnt, no_evnt, qt_pers, qt_hrs, desc_evnt, ubic, fh_inicio, fh_fin, url_evnt, fg_vig, url_foto){
        this.nu_evnt    = nu_evnt;
        this.no_evnt    = no_evnt;
        this.qt_pers    = qt_pers;
        this.qt_hrs     = qt_hrs;
        this.desc_evnt  = desc_evnt;
        this.ubic       = ubic;
        this.fh_inicio  = fh_inicio;
        this.fh_fin     = fh_fin;
        this.url_evnt   = url_evnt;
        this.fg_vig     = fg_vig;
        this.url_foto   = url_foto;
    }

    async update(){
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({   
                NO_EVNT     : this.no_evnt, 
                QT_PERS     : this.qt_pers,  
                QT_HRS      : this.qt_hrs,   
                DESC_EVNT   : this.desc_evnt,
                UBIC        : this.ubic,     
                FH_INICIO   : this.fh_inicio,
                FH_FIN      : this.fh_fin,   
                URL_EVNT    : this.url_evnt, 
                FG_VIG      : this.fg_vig,
                URL_FOTO    : this.url_foto
            })
        };
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${this.nu_evnt}`, requestOptions)
        if(!response.ok){
            throw new Error('No se pudo actualizar el evento')
        }else{
            return response.json()
        }
    }

    // * Llamamos al controlador del lado del backend para que haga la eliminación del evento
    async delete(){
        const response = await fetch(`https://genium-backend.herokuapp.com/eventos/${this.nu_evnt}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            throw new Error('No se pudo eliminar el evento');
        }
    }
}

