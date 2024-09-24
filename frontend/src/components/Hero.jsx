// components/Hero.js
import React from 'react';

const Hero = (props) => {
  return (
    <div className="hero bg-primary text-white text-center p-5">
      <h1 className="display-4">Hello, I'm {props.name} </h1>
      <p className="lead">A Full Stack Developer passionate about building creative and professional web applications.</p>
    </div>
  );
};

export default Hero;
