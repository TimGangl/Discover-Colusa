import React from 'react';
import '../Visit/Visit.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/hotels-colusa.webp';
import photo3 from '../../images/food.jpg';
import photo4 from '../../images/things-to-do.jpg';
import { Card } from 'react-bootstrap';

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

<div className="row m-5">
<div className="col-md-4 col-sm-12">
<a href="https://www.google.com" target="_blank" rel="noreferrer">
  <Card className="mb-5">
    <Card.Img variant="top" src={photo2} />
  <Card.Body className="river-links">
    <Card.Text>
      <h5 className="link-header text-center m-5">Hotels In Colusa</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a>
</div>

<div className="col-md-4 col-sm-12">
<a href="https://www.google.com" target="_blank" rel="noreferrer">
  <Card className="mb-5">
  <Card.Img variant="top" src={photo3} />
  <Card.Body className="river-links">
    <Card.Text >
      <h5 className="link-header text-center m-5">Colusa Restaurants</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a>
</div>

<div className="col-md-4 col-sm-12">
<a href="https://www.google.com" target="_blank" rel="noreferrer">
  <Card className="mb-5">
  <Card.Img variant="top" src={photo4} />
  <Card.Body  className="river-links">
    <Card.Text>
      <h5 className="link-header text-center m-5 mb-5">Things To Do</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a>
</div>
</div>
      <Footer />
    </>
  )
}

export default Visit;