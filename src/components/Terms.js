import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 text-center bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="mt-4 text-xl">Please read these terms carefully before using our platform.</p>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
        <p className="text-lg text-gray-600 mt-4">
          By accessing or using our website, you agree to comply with and be bound by these terms and conditions.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-800">User Rights and Responsibilities</h3>
          <ul className="list-disc text-gray-600 mt-4 space-y-4">
            <li>Users must not use the platform for illegal activities.</li>
            <li>Users must respect the privacy of others and not share personal data without consent.</li>
            <li>We reserve the right to modify these terms at any time.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <h3 className="text-2xl font-semibold text-gray-800">Limitation of Liability</h3>
        <p className="text-lg text-gray-600 mt-4">
          We are not responsible for any damages arising from the use of this website or its services.
        </p>
      </section>
    </div>
  );
};

export default Terms;
