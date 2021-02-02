import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import photo from '../../images/blog.jpg';
import singleBlogData from '../../data/BlogData';
import { Container, Row, Col, Card, Jumbotron } from 'react-bootstrap';

function BlogArticle(props) {
  const location = useLocation();

  const { title, author, date, preview, content, src, alt } = location.state;

  return (
    <>
      <Navigation />
      <Jumbotron
        d-flex
        fluid
        // style={{ height: '92vh' }}
        className='bg-transparent justify-content-center'
      >
        <Row className='justify-content-center'>
          <Col sm={7}>
            <h1 className="blog-header">
              {title}
            </h1>
          </Col>
        </Row>
        <Row className='justify-content-center' style={{ height: '100vh' }}>
          <Col d-flex md={4} className='mt-3'>
            <h2 className='info'>{author}</h2>
            <h3 className="info">{date}</h3>
            <p className="info">{content}</p>

          </Col>

          <Col d-flex md={3} className='mt-5 '>
            <img className='business-img img-fluid justify-content-center' src={src} alt={alt}></img>
          </Col>
        </Row>
      </Jumbotron>
      <Footer />
      {/* <Navigation />
      <Card>

        <Card.Img
          className='mx-auto'
          src={src}
          alt={alt}
          variant='top'
        />

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

          <h5 className='w-100'>
            {content}
          </h5>
        </Card.Body>
      </Card>
      <Footer /> */}
    </>
  );
}

export default BlogArticle;
