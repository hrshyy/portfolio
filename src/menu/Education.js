import React from 'react';

function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-purple-50 to-purple-100 text-gray-900 body-font py-24 px-6"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Education
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My academic journey so far.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900">
              Diploma in Computer Science & Engineering
            </h2>
            <p className="text-gray-700">
              Karnataka Polytechnic (KPT), Mangalore
            </p>
            <p className="text-gray-500">2024 - 2026 (Currently Pursuing)</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900">PUC - PCMC</h2>
            <p className="text-gray-700">
              MDS PU College, Vidyanagar, Kulai
            </p>
            <p className="text-gray-500">Completed with 81%</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900">SSLC</h2>
            <p className="text-gray-700">
              Bharathi English Medium School, Vidyanagar, Kulai
            </p>
            <p className="text-gray-500">Completed with 87%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
