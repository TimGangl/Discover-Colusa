import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import { Row, Col, Jumbotron, Image } from 'react-bootstrap';

function BlogArticle(props) {
  const location = useLocation();

  const { title, date, content1, content2, content3, content4, content5, content6, images } = location.state;

  return (
    <>
      <Navigation />
      <Jumbotron
        d-flex
        fluid
        className='bg-transparent justify-content-center'
      >
        <Row className='justify-content-center'>
          <Col sm={7}>
            <h1 className='blog-header p-2'>{title}</h1>
          </Col>
        </Row>
        <Row className='justify-content-center p-2'>
          <Col d-flex md={4} className='mt-3'>
            <h5 className='info'>{date}</h5>
            <p className='info'>{content1}</p>
            <p className='info'>{content2}</p>
            <p className='info'>{content3}</p>
            <p className='info'>{content4}</p>
            <p className='info'>{content5}</p>
            <p className='info'>{content6}</p>
          </Col>

          <Col d-flex md={3} className='mt-5 '>
            {images.map(img => {
              console.log(img);
              return (
                <Image
                  className='blog-img img-fluid mx-auto my-2'
                  src={img.src}
                  alt={img.alt}
                />
              );
            })}
          </Col>
        </Row>
      </Jumbotron>
      <Footer />
    </>
  );
}

export default BlogArticle;
