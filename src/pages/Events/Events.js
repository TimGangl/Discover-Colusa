import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { Link } from 'react-router-dom';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/Country in Colusa.png';
import photo3 from '../../images/Taco Page.png';
import photo4 from '../../images/4th of July Watermelon Fest.png';
import '../Events/Events.css';
import { Button } from 'react-bootstrap';


function Events() {
  return (
    <>
      <div>
        <img className="img-fluid" src={photo} alt="colusa field"></img>
      </div>
      <Navigation />

      
      <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8 text-center">
        <p className="events-text"></p>
        <h1 className="events-header text-center mt-5">Country in Colusa</h1>
        <img className="event-pic-1 img-fluid" src={photo2} alt="Free outdoor movies"></img>
        <br></br>
<p className="events-text-2"></p>
{/* Code for creating dowloadable link from picrure */}
        {/* <a href={process.env.PUBLIC_URL + '/bass-derby-map.jpg'} download><img className="event-pic-2 img-fluid" src={photo3} alt="Bass Derby Map"></img></a> */}

        <h1 className="events-header text-center mt-5">4th of July Watermelon Festival</h1>
<img className="event-pic-2 img-fluid" src={photo4} alt="4th watermelon Fest flyer"></img>

<div><p className="events-text">Need more information?</p></div>
<Button className="july-text"><Link to="/4th-july-watermelon-fest">Click Here</Link></Button>

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
