import React from 'react';
import './Landing.css';

import Hero from './hero/Hero';
import About from './about/About';
import Featured from './featured/Featured';
import LastCall from './lastCall/LastCall';
import Footer from './footer/Footer';

const Landing = () => (
  <div>
    <Hero />
    <About />
    <Featured />
    <LastCall />
    <Footer />
  </div>
);

export default Landing;
