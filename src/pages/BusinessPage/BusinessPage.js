import React from 'react';
import { useLocation } from 'react-router-dom';

const BusinessPage = props => {
  const location = useLocation();

  const { src, alt, businessName, text, footer } = location.state;
  return (
    <>
      <img src={src} alt={alt}></img>

      <h1>{businessName}</h1>

      <p>{text}</p>
      <p>{footer}</p>
    </>
  );
};

export default BusinessPage;
