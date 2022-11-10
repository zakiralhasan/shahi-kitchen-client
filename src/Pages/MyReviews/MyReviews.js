import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);

  //used for delete single review from reviews collection on mongodb
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this review!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Poof! Your review has been deleted!", {
                icon: "success",
              });
              const remainingReviews = myReviews.filter(
                (reviews) => reviews._id !== id
              );
              setMyReviews(remainingReviews);
            }
          });
      } else {
        swal("Your review is safe!");
      }
    });
  };
  return (
    <div>
      {myReviews?.length > 0 ? (
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
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-400 font-medium mr-3 "
                    >
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
      ) : (
        <div className="h-screen flex justify-center items-center">
          <h1 className=" text-4xl font-bold text-amber-500">
            No reviews were added
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
