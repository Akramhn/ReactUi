import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 text-center bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-xl">Our mission is to provide exceptional services and keep you updated with the latest trends.</p>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl text-center font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-center text-gray-600 mt-4">We aim to create a platform that is easy to navigate and offers rich, valuable content to users around the globe.</p>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="sm:w-1/2 text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
              <p className="text-gray-600 mt-4">Our team consists of passionate individuals dedicated to building the best experience for our users.</p>
            </div>
            <div className="sm:w-1/2 mt-8 sm:mt-0">
              <img className="w-full rounded-lg shadow-lg" src="https://via.placeholder.com/500" alt="Team" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
