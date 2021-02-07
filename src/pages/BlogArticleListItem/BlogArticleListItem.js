import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import './BlogArticleListItem.css';

const BlogArticleListItem = props => {
  console.log(props);
  return (
    <Card border='white' className='py-2'>

      <Row className='list mx-auto justify-content-center'>
        <Col sm={3} className='mx-2'>
          <Image
            className='blog-img img-fluid mx-auto'
            src={props.images[0].src}
            alt={props.images[0].alt}
          />
        </Col>
        <Col sm={3} className='mx-2 m-2'>
          <Card.Text>
            <h3>{props.title}</h3>
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
