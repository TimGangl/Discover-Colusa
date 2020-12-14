import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import '../CarouselModal/CarouselModal.css';

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
          address: props.address,
          phone: props.phone,
          hours: props.hours,
          hours2: props.hours2,
          hours3: props.hours3,
          hours4: props.hours4,
          hours5: props.hours5,
          footer: props.footer,
        },
      }}
    >
      <img id="carousel-image" style={{borderRadius:5, boxShadow:2, width:300, height:200}} src={props.src} alt={props.alt}></img><p className="name">{props.businessName}</p>
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
