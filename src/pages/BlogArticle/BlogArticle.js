import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import { Row, Container, Col, Image } from 'react-bootstrap';

function BlogArticle(props) {
  const location = useLocation();

  const { title, blogContentSections, date, preview } = location.state;

  return (
    <>
      <Navigation />
      <Row className='justify-content-center'>
        <Col sm={7}>
          <h1 className=' mt-5 blog-header'>{title}</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col d-flex md={4} className='mt-3'>
          <h3 className='info'>{date}</h3>
        </Col>
      </Row>

      <Row>
        <Col></Col>
        <Col d-flex md={8} className='mt-5 '>
          {blogContentSections.map((blogSection, i) => {
            const { text, src, alt } = blogSection;

            return (
              <Container
                className='blogSectionContainer'
                fluid
                style={{ width: '100%' }}
              >
                <Row>
                  <Col md={8} className='justify-content-center text-wrap'>
                    <p className='blogSectionText'>{text}</p>
                  </Col>
                  <Col md={3} className='justify-content-center'>
                    <Image style={{ maxHeight: '100%' }} className='blogSectionImage' src={src} alt={alt} />
                  </Col>
                </Row>
              </Container>
              // <div>
              //   <p>{text}</p>
              //   {console.log(src)}
              //   <Image
              //     className='blog-img img-fluid mx-auto my-2'
              //     src={src}
              //     alt={alt}
              //   />
              // </div>
            );
          })}
          {/* <img className='business-img img-fluid justify-content-center' src={src} alt={alt}></img> */}
        </Col>
        <Col></Col>
      </Row>
      <Footer />
    </>
  );
}

export default BlogArticle;
