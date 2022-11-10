import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { title, details, img, _id, price, ratings } = service;
  return (
    <PhotoProvider>
      <div className="border p-4 rounded-md shadow-md">
        <div className="text-left">
          <PhotoView src={img}>
            <img
              className="w-full min-h-[15rem] max-h-[15rem] rounded-md"
              src={img}
              alt=""
            />
          </PhotoView>
          <h2 className="text-xl font-medium mt-2">{title}</h2>
          <p>
            <span className="font-medium">About: </span>
            {`${details.slice(0, 100)}...`}
          </p>
          <p>
            <small>
              <span className="font-medium">Price:</span> ${price}
            </small>
          </p>
          <small>
            <span className="font-medium">Ratings:</span> {ratings}
          </small>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="bg-blue-400 w-full mt-2 py-2 rounded-md text-white font-medium hover:bg-gray-700">
            Details
          </button>
        </Link>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;
