
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Accelerate Your Career with Our Industrial Training
        </h2>
        <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto">
          Gain hands-on experience and master in-demand skills. Our expert-led courses are designed for undergraduates and internship seekers ready to step into the tech industry.
        </p>
        <button className="mt-8 bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg transform hover:scale-105">
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default Hero;
   