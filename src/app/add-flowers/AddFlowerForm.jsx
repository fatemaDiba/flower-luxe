"use client";
import { useForm } from "react-hook-form";

const AddFlowerForm = ({ insertFlower }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const result = await insertFlower(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* flower Title */}
      <div>
        <label
          htmlFor="flower_name"
          className="block text-sm font-medium text-gray-700"
        >
          Flower Name
        </label>
        <input
          type="text"
          id="flower_name"
          {...register("flower_name", {
            required: "Flower Name Is Required",
          })}
          placeholder="e.g., Daisy"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.flower_name.message}
          </p>
        )}
      </div>

      {/* flower Detail */}
      <div>
        <label
          htmlFor="flower_detail"
          className="block text-sm font-medium text-gray-700"
        >
          Flower Detail
        </label>
        <textarea
          id="flower_detail"
          rows="4"
          {...register("flower_detail", {
            required: "Flower Detail Is Required",
          })}
          placeholder="Provide a detailed description of the flower..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        {errors.task_detail && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.flower_detail.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price (per bouquet)
        </label>
        <input
          type="number"
          id="price"
          min={1}
          {...register("price", {
            required: "Price Is Required",
            min: {
              value: 1,
              message: "Minimum value is 1", // Custom error message
            },
          })}
          placeholder="e.g., 5"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.price && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.price.message}
          </p>
        )}
      </div>

      {/* flower Image URL */}
      <div>
        <label
          htmlFor="flower_image_url"
          className="block text-sm font-medium text-gray-700"
        >
          Task Image URL
        </label>
        <input
          type="url"
          id="flower_image_url"
          {...register("photo", {
            required: "flower Image Is Required",
          })}
          placeholder="Paste an image URL to attract customers"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.photo && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.photo.message}
          </p>
        )}
      </div>

      {/* Add flower Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-purple-800 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md shadow-md"
        >
          Add Flower
        </button>
      </div>
    </form>
  );
};

export default AddFlowerForm;
