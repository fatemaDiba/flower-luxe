"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  const { flower_name, price, _id } = item;
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col ">
        <div className="relative w-full h-44 2xl:h-52 mb-4 overflow-hidden rounded-xl">
          <Image
            src="/i1.jpg"
            alt="flower_img"
            fill
            priority // This ensures the image loads faster
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
            className="object-cover w-auto h-auto"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {flower_name}
          </h3>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Category:</strong> Valentine
          </p>

          <p className="text-sm text-gray-700 mb-1">
            <strong>Price:</strong> ${price}
          </p>
        </div>
        <Link
          href={`/all-flowers/${_id}`}
          className="mt-auto bg-purple-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
