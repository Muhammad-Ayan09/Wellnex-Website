import React, { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.2,
      ease: "power2.out",
      scrollTo: { y: 0, autoKill: true },
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;
    if (visible) {
      gsap.to(btnRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(btnRef.current, {
        autoAlpha: 0,
        y: 12,
        duration: 0.2,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [visible]);

  return (
    <button
      ref={btnRef}
      id="toTop"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className="fixed bottom-6 right-6 w-11 h-11 rounded-full text-white grid place-items-center shadow-lg bg-orange-500 hover:bg-orange-600 transition-colors duration-300 z-50 opacity-0 translate-y-3"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTop;
