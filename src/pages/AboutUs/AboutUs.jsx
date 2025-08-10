// src/pages/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className=" p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg leading-relaxed mb-6 text-gray-700">
        Welcome to <span className="font-semibold">Our Library Management System</span> —
        your one-stop solution for managing books, members, and resources
        efficiently. Our mission is to make library operations simpler, faster,
        and more accessible for everyone.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
      <p className="mb-6 text-gray-700">
        We aim to provide an intuitive and efficient platform for libraries to
        organize and manage their collections, track borrowing activities, and
        offer users an effortless reading experience.
      </p>

      <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Easy book cataloging and search functionality</li>
        <li>Member registration and profile management</li>
        <li>Borrowing and returning tracking system</li>
        <li>Automated reminders for due dates</li>
        <li>Data analytics for better library decisions</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
      <p className="mb-6 text-gray-700">
        We envision a future where every library, regardless of size, can
        operate seamlessly and connect readers with books faster than ever
        before.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="text-gray-700">
        Have questions or suggestions? We’d love to hear from you!  
        Email us at: <a href="mailto:support@libraryapp.com" className="text-blue-500 underline">support@libraryapp.com</a>
      </p>
    </div>
  );
};

export default AboutUs;
