import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';
import photo2 from '../../images/Colusa Restaurants Duck Week 2021.png';


function Events(){
  return(
    <>
    <div>
      <img className="img-fluid" src={photo} alt="colusa field"></img>
    </div>
    <Navigation />
    <div className="text-center m-5"><img className="img-fluid" src={photo2} alt="sip and stroll"></img></div>
    <Footer />
    </>
  )
}

export default Events;
