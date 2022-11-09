import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AddReviews = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h1>Add review</h1>

      <textarea
        className="border w-full"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default AddReviews;
