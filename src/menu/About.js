import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-pink-50 to-pink-100 text-gray-900 body-font py-24 px-6">
      <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fadeIn delay-100">
          About Me
        </h1>

        <p className="leading-relaxed text-lg opacity-0 animate-fadeIn delay-200">
          I’m Harshika, a final-year Diploma student in Computer Science & Engineering at Karnataka Polytechnic (KPT), Mangalore.
          I have a strong passion for web development and am currently sharpening my skills in React and Tailwind CSS to create modern, responsive websites.
        </p>

        <p className="leading-relaxed text-lg opacity-0 animate-fadeIn delay-400">
          Throughout my diploma, I’ve built a solid foundation in programming, databases, data structures, computer networks, and software engineering.
          I’ve gained practical experience through mini-projects, lab work, and collaborative assignments, which have helped me turn ideas into real solutions.
        </p>

        <p className="leading-relaxed text-lg opacity-0 animate-fadeIn delay-600">
          I enjoy coding, exploring new technologies, and actively participating in cultural and technical events at college.
          My goal is to design and develop innovative software solutions that can make a positive impact.
        </p>
      </div>
    </section>
  );
}

export default About;
