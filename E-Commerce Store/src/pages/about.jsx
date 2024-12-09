import React from 'react';
import about_img from '../assets/about_img.png';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-16 px-8 lg:px-20">
      {/* Left Section: Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={about_img} 
          alt="About Us"
          className="rounded-lg shadow-lg object-cover w-full"
        />
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 lg:pl-12">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">
          ABOUT <span className="text-indigo-600">US</span>
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          IndiKart was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Since our inception, we’ve worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
        </p>
        <h3 className="text-xl font-bold text-indigo-600 mb-4">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission at IndiKart is to empower customers with choice, convenience, and confidence. We’re dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
