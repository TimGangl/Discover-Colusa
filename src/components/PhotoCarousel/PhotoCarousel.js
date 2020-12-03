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
      <h1 className="info text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id.</h1>
      <h1 className="SDPS">SHOP</h1>
      <Carousel infinite={true} responsive={responsive}>
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
      <Carousel infinite={true} responsive={responsive}>
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
      <Carousel infinite={true} responsive={responsive}>
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
      <h1 className="SDPS">STAY</h1>
      <Carousel infinite={true} responsive={responsive}>
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
