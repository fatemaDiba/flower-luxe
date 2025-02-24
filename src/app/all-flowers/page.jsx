import { fetchFlowers } from "../actions/fetchflowers/fetchFlowers.js";
import Card from "./components/Card";

const AllFlowers = async () => {
  const data = await fetchFlowers();

  return (
    <div className="w-11/12 mx-auto mt-24 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {data?.map((item) => {
          return <Card key={item._id} item={item}></Card>;
        })}
      </div>
    </div>
  );
};

export default AllFlowers;
