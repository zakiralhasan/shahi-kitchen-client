import React from "react";

const AddServices = () => {
  return (
    <div>
      <h1 className="text-amber-400 text-3xl font-semibold my-8">
        Please fill up the below form to add your new service.
      </h1>
      <div className="border-2 rounded mx-4 my-8 p-5 shadow-lg">
        <form>
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
