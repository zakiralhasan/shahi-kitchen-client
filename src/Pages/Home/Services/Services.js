import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-5">
      <div className="grid sm:grid-cols-3 gap-4 p-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
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
