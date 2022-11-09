import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ReviewsCard = () => {
  const swiperRef = useRef();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className=" mx-8">
        <div className="sm:w-1/2 mx-auto">
          <h1 className="text-2xl font-medium">Customer Reviews</h1>
          <p className="text-sm mt-2 text-justify text-gray-500">
            My customers' feedback helps me to do something better. I always try
            to satisfy my customers. You also can give me feedback through your
            comment.
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          initialSlide={0}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="h-52 border p-4 mx-3 my-6 text-left rounded-md shadow-lg">
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
      </div>
      <div className="flex gap-3 text-white absolute bottom-32 text-right">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-blue-400  p-3 rounded-full "
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="flex gap-3 text-white absolute bottom-32 right-0 text-right">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-blue-400 p-3 rounded-full "
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewsCard;
