import React, { useContext } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";
import useSetTitle from "../../Hooks/useSetTitle";

const AddServices = () => {
  useSetTitle("Add-Services"); //used custom hook for changing title name.
  const { user } = useContext(AuthContext);

  //used for add new comment or review.
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.imgURL.value;
    const details = form.details.value;
    const ratings = form.ratings.value;
    const price = form.price.value;

    if (ratings < 0 || ratings > 5) {
      return swal("Please enter ratings between 0 to 5 numbers.");
    } else {
      //new service
      const service = {
        writerName: user.displayName,
        email: user.email,
        title: title,
        img: img,
        ratings: ratings,
        price: price,
        details: details,
      };

      fetch(`http://localhost:5000/services`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(service),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Your service has been successfully added.");
            form.reset();
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-amber-400 text-3xl font-semibold my-8">
        Please fill up the below form to add your new service.
      </h1>
      <div className="border-2 rounded mx-4 my-8 p-5 shadow-lg">
        <form onSubmit={handleForm}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="border outline-none px-2 py-1 rounded"
              type="text"
              name="title"
              placeholder="Enter title"
              required
            />
            <input
              className="border outline-none px-2 py-1 rounded"
              type="text"
              name="imgURL"
              placeholder="Enter image URL"
              required
            />
            <input
              className="border outline-none px-2 py-1 rounded"
              type="number"
              name="ratings"
              placeholder="Enter ratings"
              required
            />
            <input
              className="border outline-none px-2 py-1 rounded"
              type="text"
              name="price"
              placeholder="Enter price"
              required
            />
          </div>
          <div className="my-6">
            <textarea
              className="w-full border outline-none px-2 py-1 h-32"
              name="details"
              placeholder="Enter details"
              required
            ></textarea>
          </div>
          <button className="bg-blue-400 text-white px-8 my-2 py-2 rounded-md font-medium hover:bg-gray-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
