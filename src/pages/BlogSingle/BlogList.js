import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogList = props => {
  return (
    <>
      {/* <div className='m-5'>
        <div className='row m-3 justify-content-center'>
          <div classname='col-md-4 col-xsm-12 m-3'> */}
      <Container fluid className='mx-auto w-auto'>
        <Row d-flex className='py-3 px-5 mx-5 justify-content-around'>
          <Col d-flex sm={3} className='mx-auto justify-content-end'>
            <img
              className='img-fluid mx-auto w-100'
              src={props.src}
              alt={props.alt}
            ></img>
          </Col>
          <Col d-flex sm={3} className='mx-auto px-0'>
            {/* <div className='col-md-4 col-xsm-12 m-3 justify-content-center'> */}
            <h2>{props.title}</h2>
            <h4>By: {props.author}</h4>
            <h4>Date: {props.date}</h4>
            {/* </div> */}
          </Col>
          <Col d-flex sm={3} className='mx-auto px-0 justify-content-start'>
            {/* <div className='col-md-4 col-xsm-12 m-3 justify-content-center'> */}
            <h5 className='w-100'>
              <strong>Preview: </strong>
              {props.preview}
            </h5>
            {/* <h3>{props.content}</h3> */}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
      {/* </div>
        </div>
      </div> */}
    </>
  );
};

export default BlogList;
