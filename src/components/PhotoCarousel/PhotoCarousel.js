import React from 'react';
import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PhotoCarousel = props => {
  return (
    <Container disableGutters>
      <h4 className="info text-center">Discover Colusa: the small town by the big Sacramento River. Colusa is the premiere Northern California location for outdoor recreation, hunting, fishing, good food, and a historic downtown with fun places to shop. The City of Colusa has a growing arts and music scene, regularly hosts a beloved ‘street dance’, and is home to a collection of extraordinary events.</h4>
      <h4 className="info text-center">Fourth of July fireworks exploding over the river, duck hunting season opened with Colusa Duck Days festival, Christmastime in Colusa marking the Holidays, Colusa is a destination worthy of discovery.</h4>
      <h4 className="info text-center">Visitors have river access through the Colusa Boat Launch and other points along Main Street. A short hop off of I-5, Colusa is the nexus of Hwy 20 and 45. Guests will easily find hotel accommodations, B&B, and AirBnB options to extend their stay. </h4>

<h1 className="text-center m-5">Come Discover Colusa today!</h1>
      <h1 className="SDPS">SHOP</h1>
      <Carousel infinite={true} responsive={responsive} autoPlay autoPlaySpeed={2000}>
        <div>
          <a href="https://www.google.com/" target="_blank"><img src='https://picsum.photos/300/200' alt='placeholder'></img></a>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
      </Carousel>
      <h1 className="SDPS">DINE</h1>
      <Carousel infinite={true} responsive={responsive} autoPlay autoPlaySpeed={2200}>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
      </Carousel>
      <h1 className="SDPS">PLAY</h1>
      <Carousel infinite={true} responsive={responsive} autoPlay autoPlaySpeed={2400}>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
      </Carousel>
      <h1 className="SDPS" id="stay">STAY</h1>
      <Carousel infinite={true} responsive={responsive} autoPlay autoPlaySpeed={2600}>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>
        </div>
      </Carousel>
      
    </Container>
  );
};

export default PhotoCarousel;
