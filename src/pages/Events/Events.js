import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/Outdoor Movie Insta 1.png';
import photo3 from '../../images/Taco Insta 6.png';
import '../Events/Events.css';

function Events() {
  return (
    <>
      <div>
        <img className="img-fluid" src={photo} alt="colusa field"></img>
      </div>
      <Navigation />

      <h1 className="events-header text-center mt-5">Stars & Strikes!</h1>
      <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8 text-center">
        <p className="events-text"></p>

        <img className="event-pic-1 img-fluid" src={photo2} alt="Free outdoor movies"></img>
        <br></br>
<p className="events-text-2"></p>
{/* Code for creating dowloadable link from picrure */}
        {/* <a href={process.env.PUBLIC_URL + '/bass-derby-map.jpg'} download><img className="event-pic-2 img-fluid" src={photo3} alt="Bass Derby Map"></img></a> */}

        <h1 className="events-header text-center mt-5">Colusa Taco Throwdown!</h1>

        <a href="http://www.ColusaTaco.com" target="_blank" rel="noreferrer" ><img className="event-pic-2 img-fluid" src={photo3} alt="tacos in Colusa"></img></a>
      </div>
      <div className="col-sm-2"></div>
      </div>

      <Footer />
    </>
  )
}

export default Events;
