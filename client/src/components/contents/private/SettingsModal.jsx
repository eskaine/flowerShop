import React from 'react';
import {Modal} from 'react-bootstrap';

function SettingsModal({show, setShow, data}) {
    const Component = data.component;

    function handleClose() {
        setShow(false);
    }

    return (
        <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>{data.title}</Modal.Title>
           </Modal.Header>
           <Modal.Body><Component setShow={setShow} /></Modal.Body>
         </Modal>
    )
};

export default SettingsModal;
