"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  const testimonials = [
    {
      name: "Harsh P.",
      role: "Event Planner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "Flower Luxe made my wedding absolutely magical! The floral arrangements were stunning, fresh, and beautifully designed.",
    },
    {
      name: "Liam J.",
      role: "Gift Buyer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      feedback:
        "I ordered a bouquet for my mother’s birthday, and she loved it! The flowers were fresh, and the delivery was right on time.",
    },
    {
      name: "Emma W.",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      feedback:
        "Our office now feels more lively thanks to Flower Luxe! Their weekly subscription service keeps our space fresh and elegant.",
    },
    {
      name: "Noah M.",
      role: "Anniversary Gift Buyer",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      feedback:
        "I surprised my wife with a luxury bouquet, and she was thrilled! The flowers were arranged beautifully and smelled amazing.",
    },
    {
      name: "Olivia C.",
      role: "Florist Enthusiast",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      feedback:
        "I have ordered from Flower Luxe multiple times, and they never disappoint! The blooms are always fresh and last a long time.",
    },
    {
      name: "James B.",
      role: "Corporate Client",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      feedback:
        "Flower Luxe’s corporate flower service is exceptional! Our reception area looks welcoming and sophisticated every week.",
    },

    {
      name: "Jane D.",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "I ordered a bouquet for my father’s birthday, and she loved it! The flowers were fresh, and the delivery was right on time.",
    },
  ];

  return (
    <section className="w-11/12 mx-auto px-6 py-12">
      <h2 className="text-gray-500 text-sm uppercase">Testimonial</h2>
      <h3 className="text-3xl font-bold mt-2">
        23k+ Customers gave their
        <span className="text-purple-700"> Feedback</span>
      </h3>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        className="mt-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="p-6 border border-purple-500/50 rounded-lg shadow-lg text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto border-2 border-purple-500"
            />
            <h4 className="mt-3 font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="mt-3 text-gray-600">{testimonial.feedback}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
