import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();

  const testimonials = [
    {
      id: 1,
      text: '"SoulWhispers helped me find calm in chaos. It\'s like therapy in my pocket."',
      name: "Ayesha R.",
      location: "Karachi, Pakistan",
      initials: "AR",
      rating: 5,
    },
    {
      id: 2,
      text: "GymKey has transformed how I manage my gym. My members love the convenience.",
      name: "Imran M.",
      location: "Lahore, Pakistan",
      initials: "IM",
      rating: 5,
    },
    {
      id: 3,
      text: "The AI insights are spot on. I actually stick to my routine now.",
      name: "Sara K.",
      location: "Islamabad, Pakistan",
      initials: "SK",
      rating: 4,
    },
    {
      id: 4,
      text: "As a studio owner, Wellnex unified our bookings and client progress beautifully.",
      name: "Hassan A.",
      location: "Dubai, UAE",
      initials: "HA",
      rating: 5,
    },
    {
      id: 5,
      text: "Clean design and powerful features. Feels premium without being complicated.",
      name: "Zara T.",
      location: "Doha, Qatar",
      initials: "ZT",
      rating: 4,
    },
    {
      id: 6,
      text: "Privacy-first approach gives me confidence to track my health regularly.",
      name: "Bilal Y.",
      location: "Riyadh, KSA",
      initials: "BY",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              theme === "dark" ? "bg-gray-700" : "bg-white"
            } shadow-lg`}
          >
            <p className="uppercase text-xs tracking-[0.18em] font-bold text-orange-500">
              Testimonials
            </p>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            What People Are Saying
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group p-10 rounded-3xl transition-all duration-500 shadow-xl ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              } ${index === currentSlide ? "block" : "hidden"}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${testimonial.rating || 5} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      strokeWidth={2}
                      color={i < (testimonial.rating || 5) ? "#f97316" : theme === "dark" ? "#4b5563" : "#d1d5db"}
                      fill={i < (testimonial.rating || 5) ? "#f97316" : "none"}
                    />
                  ))}
                </div>
                <p
                  className={`text-lg leading-relaxed mb-6 italic ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-r from-orange-500 to-red-500">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125"
                    : `${theme === "dark" ? "bg-gray-600" : "bg-gray-400"}`
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
