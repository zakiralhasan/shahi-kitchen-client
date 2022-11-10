import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://shahi-kitchen-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-16">
      <div className="mx-2 md:w-1/2 md:mx-auto mb-8">
        <h1 className="text-amber-500 font-semibold text-2xl my-2">
          My provided services.
        </h1>
        <p className="text-sm">
          Please look at below services that I provided. You can choose any one
          of them and communicate with me. You can also give your feedback
          through social media, mail, etc.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 p-4">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            services={services}
          ></ServiceCard>
        ))}
      </div>
      <Link to="/services">
        <button className="text-blue-400 hover:text-white hover:border-white border-2 border-blue-400 px-8 my-2 py-2 rounded-md font-medium hover:bg-gray-700">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Services;
