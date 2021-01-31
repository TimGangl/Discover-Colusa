import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import './BlogArticle.css';
import photo from '../../images/blog.jpg';
import singleBlogData from './BlogData';
import BlogList from '../BlogSingle/BlogList';

const BlogData = singleBlogData;

function BlogArticle(){
  console.log(BlogData);
  return(
    <>
      <div>    
      <img className="img-fluid" src={photo} alt="many books with pages open"></img>
      </div>
        <Navigation />
          <h1 className="blog-header text-center m-3 mt-5">Blog Articles</h1>
            <div className="row">
              <div className="col-sm-2"></div>
                <div className="col-sm-8">
                {BlogData.map((blog, i) => {
                  return(
                    <BlogList
              title= {blog.blogTitle}
              author= {blog.blogAuthor}
              date= {blog.blogDate}
              preview= {blog.blogPreview}
              content={blog.blogContent}
              src={blog.image}
              alt={blog.alt}
              key= {i}
              />
              
                  )
                })}
                </div>
              <div className="col-sm-2"></div>
            </div>
      <Footer />
      </>
  )
}





export default BlogArticle;
