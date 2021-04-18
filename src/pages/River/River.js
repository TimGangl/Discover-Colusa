import React from 'react';
import '../River/River.css';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/duck-hunting.jpg';
import photo3 from '../../images/bass-pic.jpg';
import photo4 from '../../images/hiking.jpg';
import { Card } from 'react-bootstrap';

function River(){
  return(
    <>
<div>
  <img className="img-fluid" src={photo} alt="sac-river"></img>
</div>
<Navigation />
<div className="row">
<div className="col-sm-2"></div>
        <div className="col-sm-8">
<h1 className="river-header text-center mt-5">Sacramento River at Colusa</h1>
<p className="river-text text-center">Here are just a few of things that you can find to do on or around the Sacramento River while visiting Colusa</p>

<div className="row m-5">
<div className="col-md-4 col-sm-12">
<a href="https://www.google.com">
  <Card className="mb-5">
    <Card.Img variant="top" src={photo2} />
  <Card.Body className="river-links">
    <Card.Text>
      <h5 className="link-header text-center m-5">Hunting Maps</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a>
</div>

<div className="col-md-4 col-sm-12">
<a href="https://www.google.com">
  <Card className="mb-5">
  <Card.Img variant="top" src={photo3} />
  <Card.Body className="river-links">
    <Card.Text >
      <h5 className="link-header text-center m-5">Boat Launch & Fishing Info</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a>
</div>

<div className="col-md-4 col-sm-12">
<a href="https://www.google.com">
  <Card className="mb-5">
  <Card.Img variant="top" src={photo4} />
  <Card.Body  className="river-links">
    <Card.Text>
      <h5 className="link-header text-center m-5 mb-5">Hiking Trails Map</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a>
</div>
</div>

</div>
<div className="col-sm-2"></div>
</div>
      <Footer />

    </>
  )
}

export default River;