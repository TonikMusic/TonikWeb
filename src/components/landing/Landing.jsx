import React from 'react';
import './Landing.css';

import Hero from './hero/Hero';
import About from './about/About';
import Featured from './featured/Featured';

function Landing() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
    </div>
  );
}

export default Landing;
