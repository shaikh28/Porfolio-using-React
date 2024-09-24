// components/PreviousTasks.js
import React from "react";

const PreviousTasks = () => {
  return (
    <section id="tasks" className="p-5">
      <h2 className="text-center">Previous Tasks</h2>
      <div className="row">
        {/* Contact Form Task */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title h1">Contact Form</h5>
              <p className="card-text h5">
                A responsive contact form built using React and Bootstrap with
                backend integration using Express and MongoDB.
              </p>
              <a
                href="https://your-live-demo-link.com"
                className="btn live"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/yourusername/contact-form"
                className="btn btn-secondary ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Todo List Task */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title h1">Todo List</h5>
              <p className="card-text h5">
                A fully functional Todo List app with Redux, featuring add,
                edit, delete, and mark complete functionalities in it.
              </p>
              <a
                href="https://your-live-demo-link.com"
                className="btn live"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/yourusername/todo-list"
                className="btn btn-secondary ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Blog Post Task */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title h1">Blog Post</h5>
              <p className="card-text h5">
                A blogging platform where users can create, read, update, and
                delete blog posts, built using the MERN stack.
              </p>
              <a
                href="https://your-live-demo-link.com"
                className="btn live"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/yourusername/blog-post"
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

export default PreviousTasks;
