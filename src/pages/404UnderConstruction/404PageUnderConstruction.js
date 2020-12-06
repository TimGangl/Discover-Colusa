import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import photo from '../../images/under-construction.jpg'
import '../../pages/404UnderConstruction/404UnderConstruction.css';

function UnderConstruction(){
return(
  <div>
    <Navigation />
    <img className="img-fluid" src={photo} alt="under construction"></img>
  </div>

)
}

export default UnderConstruction;