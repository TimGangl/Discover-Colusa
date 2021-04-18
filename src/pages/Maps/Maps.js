import React from 'react';
import '../Maps/Maps.css';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/maps.jpg';
import photo2 from '../..//images/food.jpg';
import { Card } from 'react-bootstrap';

function Maps(){
  return(
    <>
<div>
<img className="img-fluid" src={photo} alt="pics of maps"></img>
</div>
<Navigation />
<div className="row m-3">
<div className="col-sm-2"></div>
<div className="col-sm-8">
  <h1 className="maps-header mt-5 text-center">Map Your Next Adevture In Colusa</h1>
  <p className="maps-text text-center">Grab a map and discover all that Colusa has to offer! From beautiful murals to fantastic restaurants, to lovely parks and great places to shop, Colusa is a the hidden gem just waiting for you to come find it!</p>
</div>
<div className="col-sm-2"></div>

<div className="row">
<div className="col-sm-2"></div>
<div className="col-sm-4"><a href="https://www.google.com" target="_blank" rel="noreferrer">
  <Card className="mb-5">
    <Card.Img variant="top" src={photo2} />
  <Card.Body className="river-links">
    <Card.Text>
      <h5 className="link-header text-center m-5">Hotels In Colusa</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a></div>
<div className="col-sm-4"><a href="https://www.google.com" target="_blank" rel="noreferrer">
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
<div className="col-sm-2"></div>
</div>
<div className="row">
<div className="col-sm-2"></div>
<div className="col-sm-4"><a href="https://www.google.com" target="_blank" rel="noreferrer">
  <Card className="mb-5">
    <Card.Img variant="top" src={photo2} />
  <Card.Body className="river-links">
    <Card.Text>
      <h5 className="link-header text-center m-5">Hotels In Colusa</h5>
    </Card.Text>
  </Card.Body>
</Card>
</a></div>
<div className="col-sm-4"><a href="https://www.google.com" target="_blank" rel="noreferrer">
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
</div>
<div className="col-sm-2"></div>
</div>
<Footer />
    </>
  )
}

export default Maps;