import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../BusinessPage/BusinessPage.css';
import { Row, Col, Jumbotron } from 'react-bootstrap';

const BusinessPage = props => {
  const location = useLocation();

  const {
    src,
    alt,
    businessName,
    text,
    address,
    phone,
    hours,
    hours2,
    hours3,
    hours4,
    hours5,
    footer,
  } = location.state;
  return (
    <>
      <Navigation />
      <Jumbotron
        d-flex
        fluid
        // style={{ height: '92vh' }}
        className='bg-transparent'
      >
        <Row className='justify-content-center'>
          <Col sm={8}>
            <h1 id='business' className='businessInfo'>
              {businessName}
            </h1>
          </Col>
        </Row>
        <Row className='justify-content-center' style={{ height: '100vh' }}>
          <Col d-flex md={4} className='mt-3'>
            <p className='info'>{text}</p>

            <a className='info' href={footer} target='_blank' rel='noreferrer'>
              {footer}
            </a>

            <p className='info'>{address}</p>
            <p className='info'>
              <a className='info' href='tel:{phone}'>
                {phone}
              </a>
            </p>
            <p className='info mb-0'>
              {hours}
              <br></br>
              {hours2}
            </p>
            <p className='info mt-0'>
              {hours3}
              <br></br>
              {hours4}
              <br></br>
              {hours5}
            </p>
            <p classname='info m-0'></p>
          </Col>

          <Col d-flex md={4} className='mt-5 '>
            <img className='business-img img-fluid' src={src} alt={alt}></img>
          </Col>
        </Row>
      </Jumbotron>
      <Footer />
    </>
  );
};

export default BusinessPage;
