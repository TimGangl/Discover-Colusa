import React from 'react';
import '../Visit/Visit.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';

function Visit(){
  return(
    <>
<div>
        <img className="img-fluid" src={photo} alt="colusa field"></img>
      </div>
      <Navigation />
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
<h1 className="visit-header mt-5 text-center">Visit Beautiful Colusa!</h1>
<p className="visit-text text-center">Plan your trip to Colusa! Colusa has great natural amenities and services. Find the best places to Shop, Dine, Play and Stay while you’re here!</p>
</div>
<div className="col-sm-2"></div>
</div>
      <Footer />
    </>
  )
}

export default Visit;