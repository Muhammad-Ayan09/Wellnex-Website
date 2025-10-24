import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    gsap.set([dotRef.current, ringRef.current], { xPercent: -50, yPercent: -50 });

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.08, ease: "power3" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.08, ease: "power3" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.18, ease: "power3" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.18, ease: "power3" });

    const onMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const interactiveSelector =
      "a, button, [role=button], input, textarea, select, .nav-link, .social-icon, .btn-primary, .btn-secondary";

    const onOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        gsap.to(ringRef.current, { scale: 1.6, borderColor: "#fb923c", duration: 0.2 });
        gsap.to(dotRef.current, { scale: 0.9, duration: 0.2 });
      }
    };

    const onOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        gsap.to(ringRef.current, { scale: 1, borderColor: "#f97316", duration: 0.2 });
        gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
      }
    };

    const onDown = () => {
      gsap.to(ringRef.current, { scale: 0.9, duration: 0.1 });
      gsap.to(dotRef.current, { scale: 0.8, duration: 0.1 });
    };

    const onUp = () => {
      gsap.to(ringRef.current, { scale: 1, duration: 0.2 });
      gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;
