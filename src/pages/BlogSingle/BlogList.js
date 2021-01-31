import React from 'react';


const BlogList = (props) => {
  return (
    <>
    <div className="row m-3 mb-5">
      <div className="col-6">
      <h2 className="text-left">{props.title}</h2>
      <h4 className="text-left">By: {props.author}</h4>
      <h4 className="text-left">Date: {props.date}</h4>
      </div>
      <div className="col-6">
      <h5 className="text-left"> <strong>Preview: </strong>{props.preview}</h5>
      {/* <h3>{props.content}</h3> */}
      {/* <img src={props.src} alt={props.alt}></img> */}
      </div>
    </div>  
</>
  )
}

export default BlogList;
