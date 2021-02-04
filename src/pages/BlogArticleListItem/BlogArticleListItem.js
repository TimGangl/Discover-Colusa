import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './BlogArticleListItem.css';

const BlogArticleListItem = props => {
  console.log(props);
  return (
    <Card border='white' className='py-2'>
      {/* <Card.Img
        className='img-fluid mx-auto'
        src={props.src}
        alt={props.alt}
        variant='top'
      /> */}

      <Row className='list mx-auto justify-content-center'>
        <Col sm={3} className='mx-2'>
          <Image
            className='blog-img img-fluid mx-auto'
            src={props.images[0].src}
            alt={props.images[0].alt}
          />
        </Col>
        <Col sm={3} className='mx-2'>
          <Card.Text>
            <h2>{props.title}</h2>
          </Card.Text>
          <Card.Text>
            <h4>By: {props.author}</h4>
          </Card.Text>
          <Card.Text>
            <h4>Date: {props.date}</h4>
          </Card.Text>
        </Col>
        <Col sm={3} className='mx-2'>
          <h5 className='w-100'>
            <strong>Preview: </strong>
            {props.preview}
          </h5>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogArticleListItem;
