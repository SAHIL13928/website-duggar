// src/Home.jsx
import React from 'react';
import HeroSection from './HeroSection';
import HeroSection2 from './HeroSection2';
import Services from './Services';
import Chat from './Chat';
import Banner from './Banner'; 
import FaqSection from './faq/FaqSection';
import Services2 from './Services2';

const Home = () => {
  return (
    <>
      <HeroSection /> 
      <Chat />
      <HeroSection2 />
      <Banner />
      <Services2/>
      <Services />
      <FaqSection/>
    </>
  );
};

export default Home;
