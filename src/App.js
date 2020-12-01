import React from 'react';
import VideoHeader from './components/VideoHeader';
import PhotoCarousel from '../src/components/PhotoCarousel/PhotoCarousel';
import './components/PhotoCarousel/PhotoCarousel.css'
import Navigation from '../src/components/Navigation/Navigation';
import './components/Navigation/Navigation.css'

function App() {
  return (
    <div className='App justify-content-center'>
      <VideoHeader />
      <Navigation />
      <PhotoCarousel />

    </div>
  );
}

export default App;
