import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewsCard from "../Reviews/ReviewsCard";

const ServiceDetails = () => {
  const { _id, title, details, img, price, ratings } = useLoaderData();

  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row-reverse  gap-4 items-center p-3 my-5 mx-2 border shadow-md">
        <div className="basis-1/2 p-4">
          <img className="rounded-lg border-2 shadow-lg" src={img} alt="" />
        </div>
        <div className="basis-1/2 text-left">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="my-2">
            <span className="font-semibold ">Aboute: </span>
            {details}
          </p>
          <div className="flex gap-8">
            <p>
              <span className="font-semibold">Price: </span>${price}
            </p>
            <p>
              <span className="font-semibold">Ratings:</span> {ratings}
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <ReviewsCard></ReviewsCard>
      </div>
    </div>
  );
};

export default ServiceDetails;
