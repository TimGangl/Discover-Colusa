import React from 'react';
import VideoHeader from '../../components/VideoHeader';
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel';
import '../../components/PhotoCarousel/PhotoCarousel.css'
import Navigation from '../../components/Navigation/Navigation';
import '../../components/Navigation/Navigation.css'



function Home(){
  return(
    <>
    <div className='App justify-content-center'>
      <VideoHeader />
      <Navigation />
      <PhotoCarousel />
    </div>
    </>
  )
}

export default Home;
