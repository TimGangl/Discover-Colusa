import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticleList.css';
import photo from '../../images/blog.jpg';
import singleBlogData from '../../data/BlogData';
import BlogArticleListItem from '../BlogArticleListItem/BlogArticleListItem';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
const BlogData = singleBlogData;

function BlogArticleList() {
  console.log(BlogData[0].images);
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

      <Container>
        <Row className='justify-content-center'>
          <h1 className='blog-header text-center m-3 mt-5'>Blog Articles</h1>
        </Row>

        {BlogData.map((blog, i) => {
          return (
            <Row d-flex className='justify-content-center'>
              <Col sm={12} className='link-container'>
                <Link
                  to={{
                    pathname: './blog-article',
                    state: {
                      title: blog.blogTitle,
                      date: blog.blogDate,
                      preview: blog.blogPreview,
                      content1: blog.blogContent1,
                      content2: blog.blogContent2,
                      content3: blog.blogContent3,
                      content4: blog.blogContent4,
                      content5: blog.blogContent5,
                      content6: blog.blogContent6,
                      images: blog.images,
                    },
                  }}
                >
                  <BlogArticleListItem
                    title={blog.blogTitle}

                    date={blog.blogDate}
                    preview={blog.blogPreview}
                    content1={blog.blogContent1}
                    content2={blog.blogContent2}
                    content3={blog.blogContent3}
                    content4={blog.blogContent4}
                    content5={blog.blogContent5}
                    content6={blog.blogContent6}
                    images={blog.images}
                    key={i}
                  />
                </Link>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}

export default BlogArticleList;
