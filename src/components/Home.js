import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="text-center py-16 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Website!</h1>
        <p className="mt-4 text-xl">Your go-to platform for the latest updates, information, and services.</p>
        <a href="#features" className="mt-6 inline-block px-6 py-3 bg-indigo-500 text-white rounded-xl text-lg hover:bg-indigo-600">
          Learn More
        </a>
      </section>

      <section id="features" className="py-16 bg-white">
        <h2 className="text-3xl text-center font-semibold text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
          <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800">Feature One</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget velit id arcu tincidunt feugiat.</p>
          </div>
          <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800">Feature Two</h3>
            <p className="mt-2 text-gray-600">Curabitur quis nisi mollis, pharetra augue at, pellentesque ante. Etiam auctor, orci sit amet volutpat malesuada.</p>
          </div>
          <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800">Feature Three</h3>
            <p className="mt-2 text-gray-600">Mauris malesuada elit eu dui sodales, vel condimentum ante sollicitudin. Integer efficitur tortor sit amet.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
