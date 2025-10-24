import React from "react";
import whyBg from "../Assets/why wellnex.jpg";

const WhyWellnex = () => {
  const features = [
    "Integrated Wellnex: Physical, mental, and emotional health in one ecosystem",
    "AI‑Driven Personalization: Smart recommendations tailored to your goals",
    "Scalable for Providers: From boutique studios to national gym chains",
    "Built for the Future: Cloud‑native, mobile‑first, and privacy‑conscious",
  ];

  return (
    <section id="why" className="relative" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px 800px' }}>
      <img
        className="absolute inset-0 w-full h-full object-cover blur-md"
        src={whyBg}
        alt="Why Wellnex Background"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Why Wellnex?
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4 text-left text-white/90">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 gsap-why-card"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWellnex;
