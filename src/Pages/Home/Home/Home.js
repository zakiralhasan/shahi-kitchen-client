import React from "react";
import useSetTitle from "../../../Hooks/useSetTitle";
import Banner from "../Banner/Banner";
import Donate from "../Donate/Donate";
import FoodRecycle from "../FoodRecycle/FoodRecycle";
import Services from "../Services/Services";

const Home = () => {
  useSetTitle("Home"); //used custom hook for changing title name.
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
