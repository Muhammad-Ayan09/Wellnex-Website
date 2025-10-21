// App.js
import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "./Components/ThemeContext";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Apps from "./Components/Apps";
import WhyWellnex from "./Components/WhyWellnex";
import WhatsNext from "./Components/WhatsNext";
import Testimonials from "./Components/Testimonials";
import Waitlist from "./Components/Waitlist";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import CustomCursor from "./Components/CustomCursor";
import ScrollProgress from "./Components/ScrollProgress";
import { initGSAPAnimations } from "./Components/Animations";
import Preloader from "./Components/Preloader";
import { gsap } from "gsap";

function App() {
  const appRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const finishAfterMin = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 3000 - elapsed);
      setTimeout(() => setIsLoading(false), remaining);
    };
    if (document.readyState === "complete") {
      finishAfterMin();
    } else {
      window.addEventListener("load", finishAfterMin, { once: true });
    }
    initGSAPAnimations();
    return () => window.removeEventListener("load", finishAfterMin);
  }, []);

  useEffect(() => {
    if (!isLoading && appRef.current) {
      gsap.fromTo(
        appRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      <Preloader loading={isLoading} />
      <div className="App" ref={appRef} style={{ opacity: isLoading ? 0 : 1 }}>
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Apps />
          <WhyWellnex />
          <WhatsNext />
          <Testimonials />
          <Waitlist />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
