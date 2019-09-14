import React from 'react';
import './Landing.css';

import Hero from './hero/Hero';
import About from './about/About';
import Featured from './featured/Featured';

const Landing = () => (
  <div>
    <Hero />
    <About />
    <Featured />
  </div>
);

export default Landing;
