"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const imgBB_key = import.meta.env.VITE_IMG_API_key;
const hostingAPI = `https://api.imgbb.com/1/upload?key=${imgBB_key}`;

const AddFlowerForm = ({ insertFlower }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const imgFile = new FormData();
    imgFile.append("image", data.photo[0]);

    try {
      const response = await fetch(hostingAPI, {
        method: "POST",
        body: imgFile,
      });
      const res = await response.json();

      if (!res.success) {
        throw new Error("Image upload failed");
      }

      const image = res.data.display_url;
      const flowerData = { ...data, image };

      const result = await insertFlower(flowerData);
      if (result.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully added flower!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while adding the flower!",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Flower Name */}
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
          {...register("flower_name", { required: "Flower Name is required" })}
          placeholder="e.g., Daisy"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        {errors.flower_name && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.flower_name.message}
          </p>
        )}
      </div>

      {/* Flower Detail */}
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
            required: "Flower Detail is required",
          })}
          placeholder="Provide a detailed description of the flower..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        ></textarea>
        {errors.flower_detail && (
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
            required: "Price is required",
            min: { value: 1, message: "Minimum value is 1" },
          })}
          placeholder="e.g., 5"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        {errors.price && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.price.message}
          </p>
        )}
      </div>

      {/* Occasion */}
      <div>
        <label
          htmlFor="occasion"
          className="block text-sm font-medium text-gray-700"
        >
          Occasion
        </label>
        <select
          id="occasion"
          {...register("occasion", { required: "Please select an occasion" })}
          className="select select-bordered w-full focus:outline-none focus:ring-1 focus:ring-purple-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select Occasion
          </option>
          <option>Anniversary</option>
          <option>Valentine's Day</option>
          <option>Sympathy</option>
          <option>Wedding</option>
          <option>Proposal</option>
          <option>Birthday</option>
          <option>Get Well Soon</option>
          <option>Housewarming</option>
          <option>Funeral</option>
        </select>
        {errors.occasion && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.occasion.message}
          </p>
        )}
      </div>

      {/* Flower Image Upload */}
      <div>
        <label
          htmlFor="flower_image_url"
          className="block text-sm font-medium text-gray-700"
        >
          Flower Image
        </label>
        <input
          type="file"
          id="flower_image_url"
          {...register("photo", { required: "Flower Image is required" })}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        {errors.photo && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.photo.message}
          </p>
        )}
      </div>

      {/* Add Flower Button */}
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
