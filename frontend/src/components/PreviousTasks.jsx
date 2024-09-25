import React from 'react';

const PreviousTasks = () => {
  return (
    <section id="tasks" className="p-5">
      <h2 className="text-center">Previous Tasks</h2>
      <div className="row">
        {/* Contact Form Task */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Form</h5>
              <p className="card-text">A responsive contact form built using React and Bootstrap with backend integration using Express and MongoDB.</p>
              {/* Add video here */}
              <video width="100%" controls>
                <source src="ContactForm.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Buttons */}
              <div className="mt-3">
                <a 
                  href="https://github.com/shaikh28/Contact-Form-using-MERN-Stack" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary mr-2"
                >
                  Source Code
                </a>
                <button 
                  className="btn btn-secondary" 
                  disabled
                >
                  Live Demo Soon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Todo List Task */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Todo List</h5>
              <p className="card-text">A fully functional Todo List application with Redux, featuring add, edit, delete, and mark complete functionalities.</p>
              {/* Add video here */}
              <video width="100%" controls>
                <source src="TodoList.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Buttons */}
              <div className="mt-3">
                <a 
                  href="https://github.com/shaikh28/Todo-List-using-MERN" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary mr-2"
                >
                  Source Code Soon
                </a>
                <button 
                  className="btn btn-secondary" 
                  disabled
                >
                  Live Demo Soon
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Post Task */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Post</h5>
              <p className="card-text">A blogging platform where users can create, read, update, and delete blog posts, built using MERN stack.</p>
              {/* Add video here */}
              <video width="100%" controls>
                <source src="BlogPost.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Buttons */}
              <div className="mt-3">
                <a 
                  href="https://github.com/shaikh28/Blog-Post-Website-Using-MERN-Stack" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary mr-2"
                >
                  Source Code
                </a>
                <button 
                  className="btn btn-secondary" 
                  disabled
                >
                  Live Demo Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousTasks;
  