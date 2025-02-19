const NewsLetter = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-100 to-purple-200 py-16 px-6 mb-16">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-purple-700">
          Get Exclusive Floral Designs & Offers
        </h2>
        <p className="text-gray-700 mt-3 max-w-lg mx-auto">
          Subscribe now and be the first to receive special discounts, seasonal
          updates, and floral design inspirations.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition">
            Subscribe
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. No spam, only beautiful flowers.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
