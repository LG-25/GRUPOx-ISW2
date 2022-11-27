import React from 'react'
import ButtonLink from "./ButtonIns.component"
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import QRCode from "qrcode";
const ModalQr = (props) => {
    const [src, setSrc] = useState('');
    let nu_usr = sessionStorage.getItem("userEN");
        if (nu_usr === null) {
            nu_usr = 1;
        }
    const url = `https://genium-backend.herokuapp.com/confirmarQr?nu_evnt=${props.nu_evnt}&nu_usr=${nu_usr}`;
    useEffect(() => {
        QRCode.toDataURL(url).then((nu_usr) => {
            setSrc(nu_usr);
        });
    }, []);

    return <Modal show={props.mostrar} onHide={props.ocultar}>
        <div class="card" style={{ maxWidth: "1540px" }}>
            <div class="row g-0">
                <div class="col" />
                <div class="col">
                    <div class="card-body">
                        <img src={src} />
                    </div>
                </div>
                <div class="col" />
            </div>
        </div>
    </Modal>

};
export default ModalQr