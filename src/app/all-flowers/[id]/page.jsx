import { singleFlower } from "@/app/actions/singleflower/singleFlower.js";
import { FaEdit, FaTrash } from "react-icons/fa";

const FlowerDetails = async ({ params }) => {
  const { id } = await params;
  const flower = await singleFlower(id);

  return (
    <div className="flex justify-center items-center min-h-screen p-6 mt-10">
      <div className="w-full max-w-4xl bg-gradient-to-br from-pink-100 to-purple-200  shadow-2xl rounded-3xl overflow-hidden transform transition duration-500 hover:scale-105">
        <img
          src="/i1.jpg"
          alt="Flower"
          className="w-full h-64 object-cover rounded-t-3xl"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            {flower?.flower_name}
          </h2>
          <p className="text-gray-600 mt-4 text-center">
            {flower?.flower_detail}
          </p>
          <div>
            <p className="text-gray-600 mt-4 text-center">
              Price: ${flower?.price}
            </p>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <button className="flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition">
              <FaEdit size={18} /> Edit
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">
              <FaTrash size={18} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetails;
