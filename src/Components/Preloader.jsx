import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "./ThemeContext";

const Preloader = ({ loading }) => {
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const barRef = useRef(null); // no longer used for bar, kept to minimize layout diff
  const barInnerRef = useRef(null); // no longer used
  const pulseRef = useRef(null); // no longer used
  const circleRef = useRef(null);
  const subtitleRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Prevent page scroll while preloader is visible
    const html = document.documentElement;
    const body = document.body;
    if (loading) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      gsap.set(overlayRef.current, { autoAlpha: 1, display: "grid" });
      gsap.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
      // circular progress stroke
      const r = 48; // radius used in SVG
      const C = 2 * Math.PI * r;
      if (circleRef.current) {
        circleRef.current.style.strokeDasharray = C;
        circleRef.current.style.strokeDashoffset = C;
        gsap.to(circleRef.current, {
          strokeDashoffset: 0,
          duration: 3,
          ease: "power2.inOut",
        });
      }
      // removed rotating dot for cleaner loader
      gsap.fromTo(
        subtitleRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2 }
      );
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
      gsap.to(overlayRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: "power2.out",
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = "none";
        },
      });
    }
  }, [loading]);

  const isDark = theme === "dark";

  return (
    <div
      ref={overlayRef}
      id="preloader"
      className={`fixed inset-0 ${isDark ? "bg-black" : "bg-white"} grid place-items-center`}
      style={{ display: loading ? "grid" : "none", opacity: loading ? 1 : 0, zIndex: 9999 }}
    >
      <div className="w-full max-w-xl px-6 text-center select-none">
        <h1
          ref={titleRef}
          className={`text-4xl md:text-5xl font-extrabold ${isDark ? "text-orange-500" : "text-orange-600"}`}
        >
          Wellnex Systems
        </h1>
        <div className="mt-8 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="48" stroke={isDark ? '#1f2937' : '#e5e7eb'} strokeWidth="8" />
              <circle ref={circleRef} cx="60" cy="60" r="48" stroke="url(#grad)" strokeWidth="8" strokeLinecap="round" />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f97316" />
                  <stop offset="1" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <p
          ref={subtitleRef}
          className={`mt-6 text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          Loading your Wellnex journey…
        </p>
      </div>
    </div>
  );
};

export default Preloader;
