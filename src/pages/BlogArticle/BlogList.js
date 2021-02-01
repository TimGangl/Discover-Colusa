import React from 'react';


const BlogList = (props) => {
  return (
    <>
      <div className="m-5">
        <div className="row m-3 justify-content-center">
          <div classname="col-md-4 col-xsm-12 m-3"><img classname="m-3 img-fluid" src={props.src} alt={props.alt}></img></div>
          <div className="col-md-4 col-xsm-12 m-3 justify-content-center">
            <h2 className="text-left">{props.title}</h2>
            <h4 className="text-left">By: {props.author}</h4>
            <h4 className="text-left">Date: {props.date}</h4>
          </div>
          <div className="col-md-4 col-xsm-12 m-3 justify-content-center">
            <h5 className="text-left"> <strong>Preview: </strong>{props.preview}</h5>
            {/* <h3>{props.content}</h3> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList;
