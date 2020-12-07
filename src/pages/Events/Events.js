import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import photo from '../../images/colusa.jpg';

function Events(){
  return(
    <>
    <div>
      <img className="img-fluid" src={photo} alt="colusa field"></img>
    </div>
    <Navigation />
    </>
  )
}

export default Events;
