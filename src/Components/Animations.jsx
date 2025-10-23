// utils/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initGSAPAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Navbar animation
  gsap.fromTo(
    "#siteHeader",
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5,
    }
  );

  // Setup scroll triggers for all sections
  setupSectionAnimations();

  // Setup GSAP hover animations for buttons
  setupButtonHoverAnimations();

  // Setup GSAP hover animations for Why Wellnex cards
  setupWhyCardHoverAnimations();
};

// Reusable GSAP hover for buttons
const setupButtonHoverAnimations = () => {
  const buttons = document.querySelectorAll(".gsap-btn");
  buttons.forEach((btn) => {
    gsap.set(btn, { transformOrigin: "50% 50%" });

    const onEnter = () => {
      gsap.to(btn, {
        duration: 0.18,
        scale: 1.04,
        y: -1,
        ease: "power2.out",
        boxShadow: "0 10px 20px -10px rgba(249,115,22,0.35)",
      });
    };
    const onLeave = () => {
      gsap.to(btn, {
        duration: 0.22,
        scale: 1,
        y: 0,
        ease: "power3.out",
        boxShadow: "0 0 0 0 rgba(0,0,0,0)",
      });
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    // Cleanup handler for HMR/navigation
    const cleanup = () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
    window.addEventListener("beforeunload", cleanup, { once: true });
  });
};

// Hover animations for Why Wellnex cards
const setupWhyCardHoverAnimations = () => {
  const cards = document.querySelectorAll('.gsap-why-card');
  cards.forEach((card) => {
    gsap.set(card, {
      transformOrigin: '50% 50%',
      willChange: 'transform, box-shadow, background, border-color',
    });

    const onEnter = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.to(card, {
        duration: 0.18,
        y: -4,
        scale: 1.03,
        boxShadow: '0 14px 30px -16px rgba(249,115,22,0.45)',
      })
      .to(card, {
        duration: 0.22,
        background: 'rgba(255,255,255,0.14)',
        borderColor: 'rgba(249,115,22,0.55)',
      }, 0);
    };

    const onLeave = () => {
      gsap.to(card, {
        duration: 0.22,
        y: 0,
        scale: 1,
        background: 'rgba(255,255,255,0.10)',
        borderColor: 'rgba(255,255,255,0.20)',
        boxShadow: '0 0 0 0 rgba(0,0,0,0)',
        ease: 'power3.out',
      });
    };

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);

    const cleanup = () => {
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mouseleave', onLeave);
    };
    window.addEventListener('beforeunload', cleanup, { once: true });
  });
};

const setupSectionAnimations = () => {
  // Hero animations
  const heroTl = gsap.timeline({ delay: 1 });

  heroTl
    .from("#hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(
      "#hero-title",
      {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .from(
      "#hero-description",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      "#hero-buttons",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .from(
      "#hero-features",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      },
      "-=0.4"
    );

  // About section
  gsap.from("#about-subtitle", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Add more section animations as needed...
};
