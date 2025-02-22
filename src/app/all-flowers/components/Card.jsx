"use client";

import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col ">
        <div className="relative w-full h-44 2xl:h-52 mb-4 overflow-hidden rounded-xl">
          <Image src="/i1.jpg" alt="flower_img" fill className="object-cover" />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Red Rose</h3>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Category:</strong> Valentine
          </p>

          <p className="text-sm text-gray-700 mb-1">
            <strong>Price:</strong> $5
          </p>
        </div>
        <Link
          href={"/flower-details"}
          className="mt-auto bg-purple-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
