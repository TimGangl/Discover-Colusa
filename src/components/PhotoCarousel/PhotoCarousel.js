import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-bootstrap/Modal';
import CarouselModal from '../CarouselModal/CarouselModal';
import {
  carouselShopData,
  carouselDineData,
  carouselPlayData,
  carouselStayData,
} from './carouselData';

const shopData = carouselShopData;
const dineData = carouselDineData;
const playData = carouselPlayData;
const stayData = carouselStayData;

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
      {/* Shop Carousel */}
      <h1 className='SDPS'>SHOP</h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2600}
      >
        {shopData.map(data => {
          return (
            <CarouselModal
              src={data.image}
              alt={data.alt}
              businessName={data.businessName}
              text={data.text}
              footer={data.footer}
            />
          );
        })}
      </Carousel>
      {/* Dine Carousel */}
      <h1 className='SDPS'>DINE</h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2800}
      >
        {dineData.map(data => {
          return (
            <CarouselModal
              src={data.image}
              alt={data.alt}
              businessName={data.businessName}
              text={data.text}
              footer={data.footer}
            />
          );
        })}
      </Carousel>
      {/* Play Carousel */}
      <h1 className='SDPS'>PLAY</h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
      >
        {playData.map(data => {
          return (
            <CarouselModal
              src={data.image}
              alt={data.alt}
              businessName={data.businessName}
              text={data.text}
              footer={data.footer}
            />
          );
        })}
      </Carousel>
      {/* Stay Carousel */}
      <h1 className='SDPS' id='stay'>
        STAY
      </h1>
      <Carousel
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3200}
      >
        {stayData.map(data => {
          return (
            <CarouselModal
              src={data.image}
              alt={data.alt}
              businessName={data.businessName}
              text={data.text}
              footer={data.footer}
            />
          );
        })}
      </Carousel>
    </Container>
  );
};

export default PhotoCarousel;
