import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../Watermelon/Watermelon.css';
import photo from '../../images/july-pan.jpg';

function Watermelon(){
  return(
    <>
    <div>
      <img classNmae="img-fluid" src={photo} alt="colusa field"></img>
    </div>
    <Navigation />

<div className="row">
<div className="col-sm-2"></div>
<div className="col-sm-8 text-center">
  <h1 className="july-header mt-5
  ">4th of July Watermelon Fest</h1>
</div>
<div className="col-sm-2"></div>
</div>

    <Footer />
    </>
  )
}


export default Watermelon;