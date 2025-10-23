import React from "react";

const EcommerceCard = ({ image, title, price, description }) => {
  return (
    <div>
      <div className="w-96 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
        <div className="h-96">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-800">{title}</h2>
            <span className="text-lg font-medium text-gray-800">${price}</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <button className="w-full py-2 bg-gray-100 text-gray-800 rounded-lg hover:scale-105 hover:bg-zinc-400 transition-transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCard;
