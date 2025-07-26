import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-green-50 to-green-100 text-gray-900 body-font py-24 px-6">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-100 p-8 rounded shadow hover:shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-medium title-font mb-4 text-gray-900">
              Portfolio Website
            </h2>
            <p className="leading-relaxed mb-4">
              A personal portfolio built using React and Tailwind CSS.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 p-8 rounded shadow hover:shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-medium title-font mb-4 text-gray-900">
              Temple Website
            </h2>
            <p className="leading-relaxed mb-4">
              A website about the Bhadrakali Temple, Kadri Padavu.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-100 p-8 rounded shadow hover:shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-medium title-font mb-4 text-gray-900">
              Billing System
            </h2>
            <p className="leading-relaxed mb-4">
              A Python-based billing system project that automates invoice generation and customer billing.
            </p>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-100 p-8 rounded shadow hover:shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-medium title-font mb-4 text-gray-900">
              Wadhwani Skill Development Portal
            </h2>
            <p className="leading-relaxed mb-4">
              An online skill development portal created as part of the Wadhwani Foundation's initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
