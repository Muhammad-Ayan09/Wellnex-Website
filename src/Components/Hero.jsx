// components/Hero.jsx
import React from "react";
import bgVid from "../Assets/bgVid.mp4";
import { Heart, Sparkles, Shield } from "lucide-react";

const Hero = () => {
  const features = [
    { icon: Heart, text: "Integrated Wellnex" },
    { icon: Sparkles, text: "AI Insights" },
    { icon: Shield, text: "Privacy‑First" },
  ];

  return (
    <section id="home" className="relative pt-20">
      {/* Background Section - Alag kar diya */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          src={bgVid}
          className="w-full h-full object-cover object-center scale-[1.2]"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Section - Alag kar diya */}
      <div className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="uppercase tracking-widest text-white/70 text-xs mb-3">
                Wellnex Systems
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Wellnex, <span className="text-orange-500">Reimagined</span>{" "}
                for the Next Generation
              </h1>
              <p className="mt-5 text-white/80 max-w-xl">
                A unified digital ecosystem empowering individuals, gyms, and
                Wellnex providers through cutting edge HealthTech and fitness
                innovation.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#waitlist"
                  className="gsap-btn px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Join the Movement
                </a>
                <a
                  href="#apps"
                  className="gsap-btn px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm border border-white/20"
                >
                  Explore Our Apps
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md text-xs text-white/80">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 border border-white/20"
                  >
                    <feature.icon className="text-orange-400 w-4 h-4" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
