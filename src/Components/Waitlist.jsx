import React from "react";
import { Rocket, Users, Mail, Gift, MessageCircle } from "lucide-react";
import { useTheme } from "./ThemeContext";

const Waitlist = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Rocket,
      title: "Early Access",
      description: "Get exclusive access to new features",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Gift,
      title: "Special Pricing",
      description: "Exclusive discounts for early adopters",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: MessageCircle,
      title: "Direct Feedback",
      description: "Shape the future of Wellnex tech",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="waitlist"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <Rocket className="text-orange-500 w-4 h-4" />
            <p className="uppercase text-xs tracking-[0.18em] font-bold text-orange-500">
              Stay Connected
            </p>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Be the first to experience the full Wellnex platform
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="gsap-btn group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span>Join Our Waitlist</span>
              </span>
            </a>

            <a
              href="#contact"
              className={`gsap-btn group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden border-2 border-orange-500 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </span>
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 gsap-why-card ${
                  theme === "dark"
                    ? "bg-gray-800 border border-white/20"
                    : "bg-white border border-gray-200"
                } hover:shadow-xl`}
              >
                <div
                  className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}
                >
                  <feature.icon className="text-white w-6 h-6" />
                </div>
                <h3
                  className={`font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
