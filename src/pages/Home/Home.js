import React from 'react';
import VideoHeader from '../../components/VideoHeader';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import '../../components/PhotoCarousel/PhotoCarousel.css';
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css';
import VideoCard from '../../components/VideoCard/VideoCard';

function Home() {
  return (
    <>
      <div className='App justify-content-center'>
        <VideoCard />
        <Navigation />
        <PhotoCarousel />
      </div>
    </>
  );
}

export default Home;
