import React, { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const progressBar = document.querySelector(".scroll-progress");
    if (!progressBar) return;

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="scroll-progress h-1 bg-orange-500 fixed top-0 left-0 z-50 transition-all duration-100" />
  );
};

export default ScrollProgress;
