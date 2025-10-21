import React from "react";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-14 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase text-xs tracking-[0.18em] font-bold text-orange-500">
            About Wellnex
          </p>
          <h2
            className={`mt-2 text-2xl md:text-3xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Where Wellness Meets What's Next
          </h2>
          <p
            className={`mt-5 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            At Wellnex Systems, we believe the future of health and fitness lies
            in intelligent, integrated, and deeply human‑centered technology.
            Born from the fusion of "Wellness" and "Next," our platform is
            designed to elevate how people connect with their bodies, minds, and
            communities—anytime, anywhere.
          </p>
          <p
            className={`mt-4 font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            We're not just building apps. We're building a movement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
