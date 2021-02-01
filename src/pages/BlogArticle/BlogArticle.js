import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import photo from '../../images/blog.jpg';
import singleBlogData from './BlogData';
import BlogList from '../BlogSingle/BlogList';
import { Container, Row, Col } from 'react-bootstrap';

const BlogData = singleBlogData;

function BlogArticle() {
  console.log(BlogData);
  return (
    <>
      <div>
        <img
          className='img-fluid'
          src={photo}
          alt='many books with pages open'
        ></img>
      </div>
      <Navigation />
      <Container fluid className='justify-content-center'>
        <Row className='justify-content-center'>
          <h1 className='blog-header text-center m-3 mt-5'>Blog Articles</h1>
        </Row>
        <Row className='justify-content-center'>
          <Col sm>
            {/* <div className="col-sm-2"></div> */}

            {BlogData.map((blog, i) => {
              return (
                <BlogList
                  title={blog.blogTitle}
                  author={blog.blogAuthor}
                  date={blog.blogDate}
                  preview={blog.blogPreview}
                  content={blog.blogContent}
                  src={blog.image}
                  alt={blog.alt}
                  key={i}
                />
              );
            })}

            {/* <div className="col-sm-2"></div> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default BlogArticle;
