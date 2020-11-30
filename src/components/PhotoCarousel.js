import React from 'react';
import Carousel from 'react-multi-carousel';

import { Container } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
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
      <h1>SHOP</h1>
      <Carousel infinite={true} responsive={responsive}>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 1
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 2
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 3
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 4
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 5
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 6
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 7
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 8
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 9
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 10
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 11
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 12
        </div>
      </Carousel>
      <h1>DINE</h1>
      <Carousel infinite={true} responsive={responsive}>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 1
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 2
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 3
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 4
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 5
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 6
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 7
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 8
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 9
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 10
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 11
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 12
        </div>
      </Carousel>
      <h1>PLAY</h1>
      <Carousel infinite={true} responsive={responsive}>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 1
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 2
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 3
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 4
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 5
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 6
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 7
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 8
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 9
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 10
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 11
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 12
        </div>
      </Carousel>
      <h1>STAY</h1>
      <Carousel infinite={true} responsive={responsive}>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 1
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 2
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 3
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 4
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 5
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 6
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 7
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 8
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 9
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 10
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 11
        </div>
        <div>
          <img src='https://picsum.photos/300/200' alt='placeholder'></img>Item 12
        </div>
      </Carousel>
      ;
    </Container>
  );
};

export default PhotoCarousel;
