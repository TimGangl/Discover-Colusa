import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import photo from '../../images/blog.jpg';
import singleBlogData from '../../data/BlogData';
import { Container, Row, Col, Card } from 'react-bootstrap';

function BlogArticle(props) {
  const location = useLocation();

  const { title, author, date, preview, content, src, alt } = location.state;

  return (
    <Card>
      <Card.Img
        className='img-fluid mx-auto w-100'
        src={props.src}
        alt={props.alt}
        variant='top'
      />

      <Card.Body>
        <Card.Text>
          <h2>{props.title}</h2>
        </Card.Text>
        <Card.Text>
          <h4>By: {props.author}</h4>
        </Card.Text>
        <Card.Text>
          <h4>Date: {props.date}</h4>
        </Card.Text>

        <h5 className='w-100'>
          <strong>Preview: </strong>
          {props.preview}
        </h5>
      </Card.Body>
    </Card>
  );
}

export default BlogArticle;
