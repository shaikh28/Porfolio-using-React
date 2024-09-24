// components/PersonalProjects.js
import React from 'react';

const PersonalProjects = () => {
  return (
    <section id="projects" className="bg-light p-5">
      <h2 className="text-center">Personal Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title h1"> Chat-App </h5>
              <p className="card-text h5">A Web based platform where you can connect with your family and Friends</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title h1">Tv Series Search Website</h5>
              <p className="card-text h5">A Tv Series search platform using React and TVMaze API, with responsive UI and movie details fetching functionality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
