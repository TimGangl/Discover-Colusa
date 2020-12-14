import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-bootstrap/Modal';
import '../../components/PhotoCarousel/PhotoCarousel.css';
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
    <Container className=' mb-5' >
      {/* Shop Carousel */}
      <h1 className='SDPS'>SHOP</h1>
      <Carousel className="ml-1"
        infinite={true}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={2600}
      >
        {shopData.map((data, index) => {
          return (
            <CarouselModal
              src={data.image}
              alt={data.alt}
              businessName={data.businessName}
              text={data.text}
              address={data.address}
              phone={data.phone}
              hours={data.hours}
              hours2={data.hours2}
              hours3={data.hours3}
              hours4={data.hours4}
              hours5={data.hours5}
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
              address={data.address}
              phone={data.phone}
              hours={data.hours}
              hours2={data.hours2}
              hours3={data.hours3}
              hours4={data.hours4}
              hours5={data.hours5}
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
              address={data.address}
              phone={data.phone}
              hours={data.hours}
              hours2={data.hours2}
              hours3={data.hours3}
              hours4={data.hours4}
              hours5={data.hours5}
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
              address={data.address}
              phone={data.phone}
              hours={data.hours}
              hours2={data.hours2}
              hours3={data.hours3}
              hours4={data.hours4}
              hours5={data.hours5}
              footer={data.footer}
            />
          );
        })}
      </Carousel>
    </Container>
  );
};

export default PhotoCarousel;
