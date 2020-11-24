import React from 'react';
import {Modal, Button} from 'react-bootstrap';

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
           <Modal.Body><Component /></Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleClose}>
               Close
             </Button>
             <Button variant="primary" onClick={handleClose}>
               Save Changes
             </Button>
           </Modal.Footer>
         </Modal>
    )
};

export default SettingsModal;
