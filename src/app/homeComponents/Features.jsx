import { FaSeedling, FaCut, FaTruck } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaSeedling className="text-purple-700 text-2xl md:text-3xl" />,
      title: "Freshest Blooms",
      description: "We source our flowers daily to ensure unmatched freshness.",
    },
    {
      icon: <FaCut className="text-purple-700 text-2xl md:text-3xl" />,
      title: "Custom Design",
      description:
        "Beautiful, handcrafted floral arrangements tailored for you.",
    },
    {
      icon: <FaTruck className="text-purple-700 text-2xl md:text-3xl" />,
      title: "Fast Delivery",
      description: "Same-day delivery to keep your flowers fresh and stunning.",
    },
  ];

  return (
    <section className="py-16 bg-pink-50 mb-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-8 xl:gap-10 text-center px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
