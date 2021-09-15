import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter mt-14">
      <div className="max-w-5xl mx-auto z-50 px-4 sm:px-6">
        <div className=" mt-10 p-8 text-black text-center	">
          <h1 className="text-5xl font-bold mb-8">
            {" "}
            Have the Shloka of the Day delivered to your inbox each morning.
          </h1>

          <div className="flex flex-col md:flex-row">
          <input
            className="appearance-none mt-4 md:mt-0 border rounded-md w-full py-4 mr-6  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="appearance-none mt-4 md:mt-0 border rounded-md w-full py-4 mr-6  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="bg-yellow-600 mt-4 md:mt-0 text-white px-8 py-4 rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
