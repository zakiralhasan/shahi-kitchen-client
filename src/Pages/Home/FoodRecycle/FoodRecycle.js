import React from "react";
import SmallLoader from "../../../Components/SmallLoader/SmallLoader";
import foodRecycleImg from "../../../images/food-recycle-project.png";
const FoodRecycle = () => {
  return (
    <div className="my-16 mx-4">
      <div className="mx-2 md:w-1/2 md:mx-auto mb-8">
        <h1 className="text-amber-500 font-semibold text-2xl my-2">
          My food recycle projects.
        </h1>
        <p className="text-sm">
          Every person in this world has the right to eat. I want to make a
          system, which can help needy people to get their food.
        </p>
      </div>
      <div className="sm:flex gap-4 items-center border shadow-lg">
        <div className="basis-1/2 p-3">
          {
            foodRecycleImg ?
              <img
                className="border-2 rounded-lg shadow-sm"
                src={foodRecycleImg}
                alt=""
              />
              :
              <SmallLoader></SmallLoader>
          }
        </div>
        <div className="basis-1/2 p-2">
          <h1 className="text-2xl font-semibold mb-4">You can join me.</h1>
          <p className=" text-jsutify">
            I hope my food recycling project can help needy people. That's why I
            have run a food recycling project for orphans and street children.
            I'll collect your unused food and give this food to needy people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodRecycle;
