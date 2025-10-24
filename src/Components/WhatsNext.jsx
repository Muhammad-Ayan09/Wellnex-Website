import React from "react";
import { Activity, Apple, TrendingUp, Users } from "lucide-react";
import { useTheme } from "./ThemeContext";

const WhatsNext = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Activity,
      title: "Wearable Integration",
      description:
        "Connect your fitness trackers and smartwatches for comprehensive health monitoring.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Apple,
      title: "Nutrition & Meal Planning",
      description:
        "AI-powered meal suggestions and nutrition tracking for optimal health.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Corporate Wellnex Dashboards",
      description:
        "Comprehensive analytics for organizations to track employee Wellnex.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "More Provider Tools",
      description:
        "Enhanced features for healthcare providers and Wellnex coaches.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="next"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px 900px' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="w-2 h-2 rounded-full animate-pulse bg-gradient-to-r from-orange-500 to-red-500" />
            <p className="uppercase text-xs tracking-[0.18em] font-bold text-orange-500">
              What's Coming Next
            </p>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Your Digital Wellnex Command Center
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We're building an integrated platform that connects all aspects of
            your Wellnex journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } hover:shadow-xl`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}
                >
                  <feature.icon className="text-white text-lg" />
                </div>
                <div>
                  <h3
                    className={`font-bold text-lg mb-3 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="gsap-btn group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/25"
          >
            <span>Get Early Access</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;
