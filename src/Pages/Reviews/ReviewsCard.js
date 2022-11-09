import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const ReviewsCard = ({ _id }) => {
  const { user } = useContext(AuthContext);
  const swiperRef = useRef();
  const [reviews, setReviews] = useState([]);

  //used for get reviews from server.
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  //used for add new comment or review.
  const handleForm = (event) => {
    event.preventDefault();
    const comments = event.target.comments.value;
    const rating = event.target.rating.value;

    if (rating < 0 || rating > 5) {
      return swal("Please enter ratings between 0 to 5 numbers.");
    } else {
      //new comment
      const review = {
        reviewID: _id,
        name: user.displayName,
        email: user.email,
        img: user.photoURL,
        comment: comments,
        ratings: rating,
      };

      fetch(`http://localhost:5000/reviews`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Your review has been successfully submitted.");
            event.target.reset();
          }
        });
    }
  };

  return (
    <div>
      <div className=" mx-8">
        <div className="sm:w-1/2 mx-auto my-8">
          <h1 className="text-2xl font-medium">Customer Reviews</h1>
          <p className="text-sm mt-2 text-justify text-gray-500">
            My customers' feedback helps me to do something better. I always try
            to satisfy my customers. You also can give me feedback through your
            comment.
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          autoplay
          navigation
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          initialSlide={0}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="min-h-[15rem] border p-4 mx-3 my-6 text-left rounded-md shadow-lg">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={review.img}
                    alt=""
                  />
                  <small className="">{review.name}</small>
                </div>
                <div className="my-4">
                  <p>{review.comment}</p>
                </div>
                <small>
                  <span className="font-medium">Ratings: </span>
                  {review.ratings}
                </small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {user?.uid ? (
          <form
            onSubmit={handleForm}
            className="sm:flex gap-4 items-center p-2 mt-5 mb-8 border shadow-md"
          >
            <div className="basis-1/2">
              <div>
                <textarea
                  className="border outline-none w-full h-32 px-2 "
                  name="comments"
                  placeholder="Please add your comments here."
                  required
                ></textarea>
                <input
                  className="border outline-none w-full px-2 py-2"
                  type="number"
                  name="rating"
                  placeholder="Please add your ratings here (0-5)"
                  required
                />
              </div>
            </div>
            <div className="basis-1/2">
              <button className="bg-blue-400 text-white px-8 my-2 py-2 rounded-md font-medium hover:bg-gray-700">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <Link to="/login">
            <h1 className=" text-red-600 my-4 font-medium">
              Please login to add your review
            </h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReviewsCard;
