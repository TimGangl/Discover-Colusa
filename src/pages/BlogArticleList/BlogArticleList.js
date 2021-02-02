import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticleList.css';
import photo from '../../images/blog.jpg';
import singleBlogData from '../../data/BlogData';
import BlogList from '../BlogArticle/BlogList';
import { Link } from 'react-router-dom';

const BlogData = singleBlogData;

function BlogArticle() {
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
      <h1 className='blog-header text-center m-3 mt-5'>Blog Articles</h1>
      <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>
          {BlogData.map((blog, i) => {
            return (
              <Link
                to={{
                  pathname: './blog-article',
                  state: {
                    title: blog.blogTitle,
                    author: blog.blogAuthor,
                    date: blog.blogDate,
                    preview: blog.blogPreview,
                    content: blog.blogContent,
                    src: blog.image,
                    alt: blog.alt,
                  },
                }}
              >
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
              </Link>
            );
          })}
        </div>
        <div className='col-sm-2'></div>
      </div>
      <Footer />
    </>
  );
}

export default BlogArticle;
