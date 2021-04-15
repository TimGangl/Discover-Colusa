import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/bass-derby-flyer.png';
import photo3 from '../../images/bass-derby-map.jpg';
import '../Events/Events.css';

function Events() {
  return (
    <>
      <div>
        <img className="img-fluid" src={photo} alt="colusa field"></img>
      </div>
      <Navigation />

      <h1 className="events-header text-center m-s mt-5">Colusa Striped Bass Derby</h1>
      <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8">
        <p className="events-text">Colusa is world famous as a mecca for Striped Bass fishing! Celebrated annually with a Striped Bass Derby – this year’s first prize is $10,000 with cash and prizes through 10th place.</p>

        <img className="event-pic-1 img-fluid" src={photo2} alt="Bass Derby Flyer"></img>
        <br></br>
<p className="events-text-2">Please click on map for downloadable map!</p>
        <a href={process.env.PUBLIC_URL + '/bass-derby-map.jpg'} download><img className="event-pic-2 img-fluid" src={photo3} alt="Bass Derby Map"></img></a>
      </div>
      <div className="col-sm-2"></div>
      </div>

      <Footer />
    </>
  )
}

export default Events;
