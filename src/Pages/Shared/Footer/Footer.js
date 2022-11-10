import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaGooglePlusSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-600 py-6 px-2">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://www.facebook.com/">
          <FaFacebookSquare className="text-white text-2xl" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitterSquare className="text-white text-2xl" />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutubeSquare className="text-white text-2xl" />
        </a>
        <a href="https://www.google.com/">
          <FaGooglePlusSquare className="text-white text-2xl" />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedin className="text-white text-2xl" />
        </a>
      </div>
      <p className="text-center font-medium text-white">
        Copyright @2022 || All rights are reserved by the Shahi Kitchen.
      </p>
    </div>
  );
};

export default Footer;
