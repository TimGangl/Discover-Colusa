import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../Watermelon/Watermelon.css';
import photo from '../../images/july-pan.jpg';
import photo2 from '../../images/4th-watermelon.png';
function Watermelon(){
  return(
    <>
    <div>
      <img className="img-fluid" src={photo} alt="colusa field"></img>
    </div>
    <Navigation />

<div className="row">
<div className="col-sm-2"></div>
<div className="col-sm-8 text-center">
  <h1 className="july-header mt-5
  ">4th of July Watermelon Fest</h1>

<p className="map-text">Click on map for a downloadable version</p>

  <a href={process.env.PUBLIC_URL + '/4th-watermelon.png'} download><img className="fourth-watermelon-pic img-fluid" src={photo2} alt="map for 4th festival"></img></a>
</div>
<div className="col-sm-2"></div>
</div>

    <Footer />
    </>
  )
}


export default Watermelon;