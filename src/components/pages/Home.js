import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import video from "../../assets/videos/video-1.mp4";

function Home() {

  const description_home = "Your Technology Services Partner";
  return (
    <>
      <HeroSection description={description_home} video={video} />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
