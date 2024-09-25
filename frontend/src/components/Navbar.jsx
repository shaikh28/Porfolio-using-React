// components/Navbar.js
import React from 'react';
import './Navbar.css'
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand px-5" id='name' href="/">{props.name}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/tasks">Previous Tasks</a> {/* Link to Previous Tasks section */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Personal Projects</a> {/* Link to Personal Projects section */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a> {/* You can add a contact section later */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
