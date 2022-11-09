import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/Services/ServiceCard";

const ServicesAll = () => {
  const [servicesAll, setServicesAll] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/all")
      .then((res) => res.json())
      .then((data) => setServicesAll(data));
  }, []);
  return (
    <div className="my-5">
      <div className="grid grid-cols-3 gap-4 p-4">
        {servicesAll.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;
