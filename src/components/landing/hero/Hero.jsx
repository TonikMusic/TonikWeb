import React from 'react';
import './Hero.css';

// First landing view seen
function Hero() {
  return (
    <div className="hero">
      <div className="hero__heading">
        <h1>
          <span id="hero__heading_primary">Build Your Brand</span>
        </h1>
        <h3>
          <span id="hero__heading_secondary">Find opprotunity with Tonik create and expand your community</span>
        </h3>
      </div>
    </div>
  );
}

export default Hero;
