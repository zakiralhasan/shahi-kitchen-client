import React, { useEffect, useState } from "react";
import useSetTitle from "../../Hooks/useSetTitle";
import ServiceCard from "../Home/Services/ServiceCard";

const ServicesAll = () => {
  useSetTitle("All-Services"); //used custom hook for changing title name.
  const [servicesAll, setServicesAll] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services/all")
      .then((res) => res.json())
      .then((data) => setServicesAll(data));
  }, []);

  return (
    <div className="my-5">
      {servicesAll.length < 1 && (
        <p className="w-full text-blue-500 normal-case btn btn-ghost border-none loading">
          Loading...
        </p>
      )}
      <div className="grid sm:grid-cols-3 gap-4 p-4">
        {servicesAll.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;
