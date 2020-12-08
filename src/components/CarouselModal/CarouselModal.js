import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const CarouselModal = props => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // function openInNewTab(url) {
  //   var win = window.open(url, '_blank');
  //   win.focus();
  // }

  return (
    <Link
      to={{
        pathname: './business',
        state: {
          src: props.src,
          alt: props.alt,
          businessName: props.businessName,
          text: props.text,
          footer: props.footer,
        },
      }}
    >
      <img src={props.src} alt={props.alt}></img>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{props.businessName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>{props.footer}</Modal.Footer>
      </Modal> */}
    </Link>
  );
};

export default CarouselModal;
