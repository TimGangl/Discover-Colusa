import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import photo3 from '../../images/Colusa Almond Blossom Map.png';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/Insta Almond Trail 1.png';
import photo4 from '../../images/Insta Minis.png';
import photo5 from '../../images/levee-park-mini.png';
import '../Events/Events.css';




function Events() {
  return (
    <>
      <div>
        <img className="img-fluid" src={photo} alt="colusa field"></img>
      </div>
      <Navigation />
      <div className="row">
        <div className="col-12 text-center mt-5"><h1 className="event-heading1">Colusa Almond Blossom Trail</h1></div>
        <div className="col-1"></div>
        <div className="col-lg-3 col-sm-12">
          <div className="text-center m-2"><img className="img-fluid event-pic-1" src={photo2} alt="Almond Blossom Trail"></img>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 event-text"><span className="event-text">Colusa is central to some of the most beautiful almond country in Northern California. Journey here to see the blossoms in full bloom before they disappear! Please click on the map for downloadable copy of directions, and don't forget to eat at one of our fantastic restaurants or shop in a great Colusa store while you're here!</span></div>
        <div className="col-lg-3 col-sm-12 text-center m-2">
          <a href={process.env.PUBLIC_URL + '/Colusa Almond Blossom Map.png'} download><img className="img-fluid event-pic-2 justify-content-center" src={photo3} alt="map of almond trail">
          </img></a>
        </div>
        <div className="col-1"></div>
      </div>
      <br>
      </br>
      <div className="row">
        <div className="col-12 text-center mt-5"><h1 className="event-heading2">March of the Minis</h1></div>
        <div className="col-1"></div>
        <div className="col-lg-3 col-sm-12 m-2"><img className="img-fluid event-pic-3" alt="march of the minis" src={photo4}></img></div>
        <div className="event-text-2 col-lg-4 col-sm-12"><span className="event-text-2 text-center">Colusa is inviting Mini Cooper owners to a very special drive-through parade experience along the Sacramento River! March 27th at 11am, Colusa will be opening up it's levee park pathway just for this mini-parade. Parade location starts at 50 Tenth Street (also the location of the Colusa Sacramento River State Park). Please click on map for a downloadable copy of directions.</span></div>
        <div className="col-lg-3 col-sm-12">
          <a href={process.env.PUBLIC_URL + '/levee-park-mini.png'} download><img className="img-fluid event-pic-3" alt="march of the minis" src={photo5}></img></a>
        </div>
        <div className="col-1"></div>
      </div>

      <Footer />
    </>
  )
}

export default Events;
