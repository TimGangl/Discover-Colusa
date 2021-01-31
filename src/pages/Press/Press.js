import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../Press/Press.css';
import photo from '../../images/press.jpg';

function Press(){
  return(
    <>
    <div>
      <img className="img-fluid" src={photo} alt="pile of newspaper press letters"></img>
      </div>
      <Navigation />
      <h1 className="press-header text-center m-3 mt-5">Press Releases</h1>
      <Footer />
    
    </>
  )
}





export default Press;