import React from 'react';
import './Landing.css';

import Hero from './hero/Hero';
import About from './about/About';

function Landing() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default Landing;
