import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import { Row, Col, Jumbotron, Image } from 'react-bootstrap';

function BlogArticle(props) {
  const location = useLocation();

<<<<<<< HEAD
  const { title, blogContentSections, date, preview } = location.state;
=======
  const { title, date, content1, content2, content3, content4, content5, content6, images } = location.state;
>>>>>>> bc6fc159d90065e41519ab5c30c8d5a0a48dbab7

  return (
    <>
      <Navigation />
<<<<<<< HEAD
      <Row className='justify-content-center'>
        <Col sm={7}>
          <h1 className='blog-header'>{title}</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col d-flex md={4} className='mt-3'>
          <h3 className='info'>{date}</h3>
        </Col>
      </Row>

      <Row>
        <Col d-flex md={12} className='mt-5 '>
          {blogContentSections.map((blogSection, i) => {
            const { text, src, alt } = blogSection;

            return (
              <Container
                className='blogSectionContainer'
                fluid
                style={{ width: '100%' }}
              >
                <Row>
                  <Col md={7} className='justify-content-center text-wrap'>
                    <p className='blogSectionText'>{text}</p>
                  </Col>
                  <Col md={3} className='justify-content-center'>
                    <Image className='blogSectionImage' src={src} alt={alt} />
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
      </Row>

      <Footer />
      <Navigation />
      {/* <Card>
        <Card.Img className='mx-auto' src={src} alt={alt} variant='top' />

        <Card.Body>
          <Card.Text>
            <h2>{title}</h2>
          </Card.Text>
          <Card.Text>
            <h4>By: {author}</h4>
          </Card.Text>
          <Card.Text>
            <h4>Date: {date}</h4>
          </Card.Text>

          <h5 className='w-100'>{content}</h5>
        </Card.Body>
      </Card> */}
=======
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
>>>>>>> bc6fc159d90065e41519ab5c30c8d5a0a48dbab7
      <Footer />
    </>
  );
}

export default BlogArticle;
