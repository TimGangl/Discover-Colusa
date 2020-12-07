import React from 'react';
import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';
import CarouselModal from '../CarouselModal/CarouselModal';
import {
  carouselShopImages,
  carouselDineImages,
  carouselPlayImages,
  carouselStayImages,
} from '../PhotoCarousel/carousel-images';

const shopImages = carouselShopImages;
const dineImages = carouselDineImages;
const playImages = carouselPlayImages;
const stayImages = carouselStayImages;

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
      <h4 className='info text-center'>
        <strong>
          <i>Discover Colusa: </i>
        </strong>
        the small town by the big Sacramento River. Colusa is the premiere
        Northern California location for outdoor recreation, hunting, fishing,
        good food, and a historic downtown with fun places to shop. The City of
        Colusa has a growing arts and music scene, regularly hosts a beloved
        ‘street dance’,<br></br> and is home to a collection of extraordinary
        events.
      </h4>
      <h4 className='info text-center'>
        Fourth of July fireworks exploding over the river, duck hunting season
        opened with Colusa Duck Days festival, Christmastime in Colusa marking
        the Holidays, Colusa is a destination worthy of discovery.
      </h4>
      <h4 className='info text-center'>
        Visitors have river access through the Colusa Boat Launch and other
        points along Main Street. A short hop off of I-5, Colusa is the nexus of
        Hwy 20 and 45. Guests will easily find hotel accommodations, B&B, and
        AirBnB options to extend their stay, and fully discover Colusa.{' '}
      </h4>

      <h1 className='SDPS'>SHOP</h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2600}
      >
        {shopImages.map(image => {
          return (
            <div>
              <img src={image.source} alt={image.alt}></img>
            </div>
          );
        })}
      </Carousel>
      <h1 className='SDPS'>DINE</h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2800}
      >
        {dineImages.map(image => {
          return (
            <div>
              <img src={image.source} alt={image.alt}></img>
            </div>
          );
        })}
      </Carousel>
      <h1 className='SDPS'>PLAY</h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
      >
        {playImages.map(image => {
          return (
            <div>
              <img src={image.source} alt={image.alt}></img>
            </div>
          );
        })}
      </Carousel>
      <h1 className='SDPS' id='stay'>
        STAY
      </h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3200}
      >
        {stayImages.map(image => {
          return (
            <div>
              <img src={image.source} alt={image.alt}></img>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default PhotoCarousel;
