import React from 'react';
import { FaPython, FaCuttlefish } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaPython size={50} className="text-blue-600" />, name: "Python" },
    { icon: <FaCuttlefish size={50} className="text-green-600" />, name: "C++" },
    { icon: <SiHtml5 size={50} className="text-orange-600" />, name: "HTML" },
    { icon: <SiCss3 size={50} className="text-blue-500" />, name: "CSS" },
    { icon: <SiJavascript size={50} className="text-yellow-500" />, name: "JavaScript" },
    { icon: <SiReact size={50} className="text-cyan-500" />, name: "React" },
  ];

  return (
    <section id="skills" className="bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900 body-font py-24 px-6">
      <div className="container mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-12">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
