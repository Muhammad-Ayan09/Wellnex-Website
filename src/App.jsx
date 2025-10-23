// App.js
import React, { useEffect, useState } from "react";
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
 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loaded = document.readyState === "complete";
    let elapsed = false;
    const onLoad = () => {
      loaded = true;
      if (elapsed) setIsLoading(false);
    };

    // exact 3s visual duration
    const timer = setTimeout(() => {
      elapsed = true;
      if (loaded) setIsLoading(false);
    }, 3000);

    if (loaded) {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    initGSAPAnimations();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <ThemeProvider>
      <Preloader loading={isLoading} />
      <div className="App overflow-x-hidden">
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
