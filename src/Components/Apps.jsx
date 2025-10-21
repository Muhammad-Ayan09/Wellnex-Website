import React from "react";
import { Download, ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeContext";

const Apps = () => {
  const { theme } = useTheme();

  const apps = [
    {
      id: "soulwhispers",
      name: "SoulWhispers",
      title: "Your Pocket‑Sized Wellness Companion",
      description:
        "Mindfulness and emotional wellness with guided meditations, reflective journaling, and AI‑powered mood tracking.",
      features: [
        "Telehealth and diagnostics",
        "Mood journaling with AI insights",
        "Personalized providers",
        "Seamless booking & check‑in for consultation sessions",
      ],
      image:
        "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?q=60&w=1200&auto=format&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=60&w=1200&auto=format&fit=crop",
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
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest text-orange-400 font-extrabold">
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
                <div className="mt-4">
                  <a
                    href="#"
                    className={`gsap-btn inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors duration-300 ${
                      app.id === "soulwhispers"
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : `border ${
                            theme === "dark"
                              ? "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                              : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                          }`
                    }`}
                  >
                    <app.buttonIcon className="w-4 h-4" />
                    {app.buttonText}
                  </a>
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
