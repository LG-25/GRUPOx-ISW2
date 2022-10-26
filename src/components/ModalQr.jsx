import React from 'react'
import ButtonLink from "./ButtonIns.component"
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import QRCode from "qrcode";
const ModalQr = (props) => {
    const [src, setSrc] = useState('');
    const url = `https://genium-backend.herokuapp.com/?nroEvento=${props.nu_evnt}&nroUsuario=${1}`;
    useEffect(() => {
        QRCode.toDataURL(url).then((data) => {
            setSrc(data);
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