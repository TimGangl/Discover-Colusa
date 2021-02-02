import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import photo from '../../images/blog.jpg';
import singleBlogData from '../../data/BlogData';
import BlogList from '../BlogSingle/BlogList';
import { Container, Row, Col } from 'react-bootstrap';

function BlogArticle(props) {
  const location = useLocation();

  const { title, author, date, preview, content, src, alt } = location.state;
  return (
    <>
      <div>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-8'>
            <h1 classname='blogInfo'>{title}</h1>
          </div>
          <div className='col-sm-2'></div>
          <div className='row'>
            <div className='col-lg-2 col-md-0'></div>
            <div classname='col-lg-4 col-md-6 mt-3'></div>
            <div classname='col-lg-4 col-md-6 mt-3'></div>
            <div className='col-lg-2 col-md-0'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogArticle;
