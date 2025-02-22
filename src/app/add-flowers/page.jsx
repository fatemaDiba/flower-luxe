import { insertFlower } from "../actions/insertFlowers/addFlowers";
import AddFlowerForm from "./AddFlowerForm";

const AddFlowers = () => {
  return (
    <div className="mt-20 mb-16">
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg w-full max-w-3xl p-8">
          <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-6">
            Add A New <span className="text-purple-800">Flower</span>
          </h2>
          <AddFlowerForm insertFlower={insertFlower}></AddFlowerForm>
        </div>
      </div>
    </div>
  );
};

export default AddFlowers;
