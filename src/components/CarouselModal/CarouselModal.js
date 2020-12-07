import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const CarouselModal = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <img src={props.src} alt={props.alt} onClick={handleShow}></img>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{props.businessName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>{props.footer}</Modal.Footer>
      </Modal>
    </>
  );
};

export default CarouselModal;
