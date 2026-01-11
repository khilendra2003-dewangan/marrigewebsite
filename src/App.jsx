import React from 'react';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import CoupleShowcase from './CoupleShowcase';
import LoveSection from './LoveSection';
import BlessingsSection from './BlessingsSection';
import EventsSection from './EventsSection';
import Navbar from './Navbar';

import FamilyWelcomeSection from './FamilyWelcomeSection';
import GallerySection from './GallerySection';
import Footer from './Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="couple"><CoupleShowcase /></div>
      <div id="story"><StorySection /></div>
      <FamilyWelcomeSection />
      <EventsSection />
      <div id="blessings"><BlessingsSection /></div>
      <GallerySection />
      <div id="love"><LoveSection /></div>
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
