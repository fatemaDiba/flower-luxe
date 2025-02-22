import Card from "./components/Card";

const AllFlowers = () => {
  return (
    <div className="mt-20 mb-16 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default AllFlowers;
