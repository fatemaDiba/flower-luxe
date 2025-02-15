"use client";

const Banner = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/i1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold">
          Welcome to Flower Luxe, where elegance meets nature’s beauty.
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Flowers have the power to transform spaces and uplift spirits. Let us
          help you create moments of joy and wonder with our premium floral
          arrangements.
        </p>
        <button className="mt-6 bg-purple-900 hover:bg-purple-800 hover:-translate-y-1 duration-300 md:text-base text-sm text-white font-semibold py-3 px-6 rounded-lg">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
