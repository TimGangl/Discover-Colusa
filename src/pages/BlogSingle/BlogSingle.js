import React from 'react';
import Footer from '../../components/Footer/Footer';
import './BlogSingle.css';
import singleBlogData from '../BlogSpot/BlogData';


function BlogSingle(){
  return(
    <>
      <div>
        <div className="row">
          <div className="col-sm-2"></div>
            <div className="col-8">
<h1 classname="blogInfo">Blog Name</h1>
            </div>
          <div className="col-sm-2"></div>
            <div className="row">
              <div className="col-lg-2 col-md-0"></div>
                <div classname="col-lg-4 col-md-6 mt-3"></div>
                <div classname="col-lg-4 col-md-6 mt-3"></div>
              <div className="col-lg-2 col-md-0"></div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default BlogSingle;