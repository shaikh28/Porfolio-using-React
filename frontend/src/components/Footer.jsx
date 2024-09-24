// components/Footer.js
import React from 'react';

const Footer = (props) => {
  return (
    <footer className="bg-dark text-white text-center p-3">
      <p>&copy; 2024 {props.name}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
