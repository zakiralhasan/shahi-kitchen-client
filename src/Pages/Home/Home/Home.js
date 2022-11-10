import React from "react";
import Banner from "../Banner/Banner";
import Donate from "../Donate/Donate";
import FoodRecycle from "../FoodRecycle/FoodRecycle";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <FoodRecycle></FoodRecycle>
      <Donate></Donate>
    </div>
  );
};

export default Home;
