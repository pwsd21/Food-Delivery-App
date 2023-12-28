import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
          At Grubhub, we're passionate about connecting you with the best local
          restaurants and delivering a diverse array of cuisines straight to
          your doorstep. Discover, order, and enjoy a world of flavors without
          leaving the comfort of your home.
        </p>
        <p className="text-gray-700 mb-6">
          Grubhub brings you the finest restaurants in your area. Explore a vast
          selection of local favorites, trendy eateries, and well-known
          establishments.Say goodbye to long queues and complex ordering
          processes. Our user-friendly app ensures a seamless and efficient
          ordering journey.
        </p>
        <p className="text-gray-700 font-semibold">
          Download Grubhub Today and Elevate Your Dining Experience!
        </p>
      </div>
    </div>
  );
};

export default About;
