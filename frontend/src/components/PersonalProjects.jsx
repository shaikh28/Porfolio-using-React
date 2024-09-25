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
              <a
                href="https://your-live-demo-link.com"
                className="btn live"
                target="_blank"
                style={{pointerEvents:'none'}}
                rel="noopener noreferrer"
               
              >
                Coming Live Demo Soon
              </a>
              <a
                href="https://github.com/shaikh28/Chat-App  "
                className="btn btn-secondary ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title h1">Tv Series Search Website</h5>
              <p className="card-text h5">A Tv Series search platform using React and TVMaze API, with responsive UI and movie details fetching functionality.</p>
              <a
                href="https://your-live-demo-link.com"
                className="btn live"
                target="_blank"
                style={{pointerEvents:'none'}}
                rel="noopener noreferrer"
               
              >
                Coming Live Demo Soon
              </a>
              <a
                href="https://github.com/shaikh28/Box-Office-App-"
                className="btn btn-secondary ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
