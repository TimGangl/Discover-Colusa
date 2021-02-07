import React from 'react';
// import VideoHeader from '../../components/VideoHeader';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import '../../components/PhotoCarousel/PhotoCarousel.css';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import VideoCard from '../../components/VideoCard/VideoCard';
import HomePageText from '../../components/HomePageText/HomePageText';
import Footer from '../../components/Footer/Footer';
import BusinessPage from '../../pages/BusinessPage/BusinessPage';
import {
  carouselShopData,
  carouselDineData,
  carouselPlayData,
  carouselStayData,
} from '../../components/PhotoCarousel/carouselData';

const shopData = carouselShopData;
const dineData = carouselDineData;
const playData = carouselPlayData;
const stayData = carouselStayData;

function Home() {
  return (
    <>

      <VideoCard />
      <Navigation />
      <HomePageText />
      <PhotoCarousel />
      <Footer />


    </>
  );
}

export default Home;
