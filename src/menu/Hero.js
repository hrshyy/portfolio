import React from "react";

function Hero() {
  return (
   <section
  id="home"
  className="bg-gradient-to-b from-indigo-50 to-indigo-100 text-gray-900 min-h-screen flex flex-col items-center justify-center text-center"
>

 
      <img
        className="w-40 h-40 mb-6 object-cover object-center rounded-full shadow-xl transform transition-transform duration-300 hover:scale-110"
        alt="My Portrait"
        src="/myphoto.jpg"
      />
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Harshika!</h1>
      <p className="text-lg max-w-xl">
        Welcome to my portfolio!
      </p>
    </section>
  );
}

export default Hero;
