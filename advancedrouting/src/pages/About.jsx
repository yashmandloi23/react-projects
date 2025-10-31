import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-300"
      >
        Home
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-300"
      >
        Back
      </button>
      <button
        onClick={() => navigate(+1)}
        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded shadow transition duration-300"
      >
        next
      </button>
      <div className="text-2xl font-bold text-gray-800 mt-6">About</div>
    </div>
  );
};

export default About;
