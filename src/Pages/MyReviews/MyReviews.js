import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  return (
    <div>
      <h1>my reviews</h1>
      <div>
        {myReviews.map((review) => (
          <div key={review._id}>
            <div className="min-h-[13rem] border p-4 mx-3 my-6 text-left rounded-md shadow-lg">
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={review.img}
                    alt=""
                  />
                  <small className="">{review.name}</small>
                </div>
                <div>
                  <button className="text-blue-400 font-medium mr-3 ">
                    <small>Update</small>
                  </button>
                  <button className="text-red-400 font-medium mr-3 ">
                    <small>Delete</small>
                  </button>
                </div>
              </div>
              <div className="my-4">
                <p>{review.comment}</p>
              </div>
              <small>
                <span className="font-medium">Ratings: </span>
                {review.ratings}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
