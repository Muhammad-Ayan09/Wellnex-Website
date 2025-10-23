import React from "react";
import { Download, ExternalLink, Apple } from "lucide-react";
import { useTheme } from "./ThemeContext";
import soulWhisperImg from "../Assets/soul whisper logo.jpg";
import gymKeyImg from "../Assets/gym key logo.jpg";

const Apps = () => {
  const { theme } = useTheme();

  const apps = [
    {
      id: "soulwhispers",
      name: "SoulWhispers",
      title: "Your Pocket‑Sized Wellnex Companion",
      description:
        "Mindfulness and emotional Wellnex with guided meditations, reflective journaling, and AI‑powered mood tracking.",
      features: [
        "Telehealth and diagnostics",
        "Mood journaling with AI insights",
        "Personalized providers",
        "Seamless booking & check‑in for consultation sessions",
      ],
      image: soulWhisperImg,
      buttonText: "Download SoulWhispers",
      buttonIcon: Download,
    },
    {
      id: "gymkey",
      name: "GymKey",
      title: "Smart Access to Fitness, Anytime",
      description:
        "Your digital passport to fitness freedom. Connect to partner gyms, track workouts, and simplify access.",
      features: [
        "Seamless check‑in at partner gyms",
        "Workout tracking and performance analytics",
        "Membership management for gym owners",
        "Real‑time class schedules and bookings",
      ],
      image: gymKeyImg,
      buttonText: "Explore GymKey",
      buttonIcon: ExternalLink,
    },
  ];

  return (
    <section
      id="apps"
      className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="uppercase text-xs tracking-[0.18em] font-bold text-orange-500">
            Our Flagship Apps
          </p>
          <h2
            className={`mt-2 text-2xl md:text-3xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            SoulWhispers & GymKey
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative">
                <img
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  src={app.image}
                  alt={app.name}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-orange-500 font-extrabold">
                  {app.name}
                </div>
                <div
                  className={`mt-1 font-extrabold text-xl ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {app.title}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {app.description}
                </p>
                <ul
                  className={`mt-4 text-sm space-y-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {app.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <div
                  className={`mt-4 text-xs font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Available on iOS and Android
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#"
                    className={`gsap-btn inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      app.id === "soulwhispers"
                        ? "bg-orange-500 text-white hover:bg-orange-600 shadow-sm hover:shadow-md"
                        : `border shadow-sm hover:shadow-md ${
                            theme === "dark"
                              ? "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                              : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                          }`
                    }`}
                  >
                    <app.buttonIcon className="w-4 h-4" />
                    {app.id === "gymkey" ? "Get GymKey" : app.buttonText}
                  </a>
                  <div className="ml-4 flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="Download on the App Store"
                      title="Download on the App Store"
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/60 ${
                        theme === "dark"
                          ? "bg-black border-black text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                          : "bg-white border-black text-black hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                      }`}
                    >
                      <Apple className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Get it on Google Play"
                      title="Get it on Google Play"
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/60 ${
                        theme === "dark"
                          ? "bg-black border-black text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                          : "bg-white border-black text-black hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="w-4 h-4"
                        fill="currentColor"
                      >
                        <path d="M3 2.5v11l9-5.5-9-5.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
