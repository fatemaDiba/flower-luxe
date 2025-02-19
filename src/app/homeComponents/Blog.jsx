const Blog = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-700">
          Flower Care & Styling Tips
        </h2>
        <p className="text-gray-600 text-center mt-3 max-w-xl mx-auto">
          Discover expert tips on flower care, arrangements, and décor to keep
          your blooms fresh and elegant.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Blog Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/f1.jpg"
              alt="Flower Arrangement"
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              5 Easy Flower Arrangement Ideas
            </h3>
            <p className="text-gray-500 mt-2">
              Learn how to create stunning floral arrangements effortlessly at
              home.
            </p>
            <a
              href="#"
              className="text-purple-600 font-medium mt-3 inline-block"
            >
              Read More →
            </a>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/f2.jpg"
              alt="Flower Care"
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              How to Keep Flowers Fresh Longer
            </h3>
            <p className="text-gray-500 mt-2">
              Extend the life of your flowers with these simple but effective
              care tips.
            </p>
            <a
              href="#"
              className="text-purple-600 font-medium mt-3 inline-block"
            >
              Read More →
            </a>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="/f3.jpg"
              alt="Event Decor"
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Floral Décor for Special Events
            </h3>
            <p className="text-gray-500 mt-2">
              Create breathtaking event decorations with the perfect floral
              touch.
            </p>
            <a
              href="#"
              className="text-purple-600 font-medium mt-3 inline-block"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
