import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import photo from '../../images/under-construction.jpg'
import '../../pages/404UnderConstruction/404UnderConstruction.css';

function UnderConstruction(){
return(
  <>
    <Navigation />
    <div>
    <img id="under-construction" className="img-fluid" src={photo} alt="under construction"></img>
    </div>
    <Footer />
  </>

)
}

export default UnderConstruction;