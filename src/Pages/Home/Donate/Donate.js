import React from "react";
import donateImg from "../../../images/donate-project.png";

const Donate = () => {
  return (
    <div className="my-16 mt-20 mx-4">
      <div className="mx-2 md:w-1/2 md:mx-auto mb-8">
        <h1 className="text-amber-500 font-semibold text-2xl my-2">
          My donation projects.
        </h1>
        <p className="text-sm">
          Please, I want to draw your attention, I know you want to do some good
          work, but not find a way how to do this. This project helps you to do
          something good for society.
        </p>
      </div>
      <div className="sm:flex gap-4 items-center border shadow-lg">
        <div className="basis-1/2 p-3">
          <img
            className="border-2 rounded-lg shadow-sm"
            src={donateImg}
            alt=""
          />
        </div>
        <div className="basis-1/2 p-2">
          <h1 className="text-2xl font-semibold mb-4">You can join me.</h1>
          <p className=" text-jsutify">
            Dear valuable customer, I have a charity project. Where you can
            donate as your ability. I am collecting the fund and spending this
            on orphanages, old-age home, social activities, etc. You can
            communicate with me through email, social media, and phone also.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
