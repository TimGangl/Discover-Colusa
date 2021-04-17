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

      <Footer />
    </>
  )
}

export default Visit;