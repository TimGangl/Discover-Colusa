import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import '../BusinessPage/BusinessPage.css';

const BusinessPage = props => {
  const location = useLocation();

  const { src, alt, businessName, text, address, phone, hours, footer } = location.state;
  return (
    <>
      

     <div className="row mt-5">
     <div className="col-sm-2"></div>
<div className="col-8"><h1 id="business" className="businessInfo">{businessName}</h1></div>
     <div className="col-sm-2"></div>
     </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-4 mt-3">
          <p className="info">{text}</p>
          <p className="info">{address}</p>
          <p className="info">{phone}</p>
          <p className="info">{hours}</p>
          <p ><a className="info" href={footer} target='_blank'>{footer}</a></p>
        </div>
      
        <div className="col-sm-4 mt-5">
          <img className="business-img img-fluid" src={src} alt={alt}></img>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <Footer/>
    </>
  );
};

export default BusinessPage;
