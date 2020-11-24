import React from 'react';
import {Modal} from 'react-bootstrap';


function AlertModal({show, setShow, data}) {

    function handleClose(){
        setShow(false);
    }

    return (
        <Modal show={show} onHide={handleClose} centered> 
            <Modal.Header closeButton>
                <Modal.Title>
                    {data.message}
                </Modal.Title>
            </Modal.Header>
        </Modal>
    )
}

export default AlertModal
