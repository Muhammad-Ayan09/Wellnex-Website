import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  Sun,
  Moon,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#apps", label: "APPS" },
    { href: "#why", label: "WHY WELLNEX" },
    { href: "#next", label: "WHAT'S NEXT" },
    { href: "#testimonials", label: "TESTIMONIALS" },
    { href: "#contact", label: "CONTACT" },
  ];

  const socialIcons = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Active section detection
      const sections = [
        '#home',
        '#about',
        '#apps',
        '#why',
        '#next',
        '#testimonials',
        '#contact',
      ];
      const scrollPos = window.scrollY + 100; // offset for header
      let current = '#home';
      sections.forEach((id) => {
        const el = document.querySelector(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
          }
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      ease: "power2.out",
      scrollTo: { y: target, offsetY: 80, autoKill: true },
    });
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? theme === "dark"
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-white/95 backdrop-blur-md shadow-lg"
          : theme === "dark"
          ? "bg-gray-900"
          : "bg-white"
      } border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className={`flex flex-col group ${activeLink === '#home' ? 'active' : ''}`}>
            <span
              className={`text-2xl font-black leading-tight transition-colors ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Wellnex
            </span>
            <span className="text-lg font-bold text-orange-500 leading-tight">
              Systems
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`nav-link relative font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                } group ${activeLink === link.href ? 'active' : ''}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <div
              className={`h-6 w-px ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              }`}
            />

            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${
                theme === "dark" ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                  theme === "dark" ? "left-7" : "left-1"
                }`}
              />

              <Sun
                className={`absolute top-1 left-1 w-3 h-3 transition-all duration-300 ${
                  theme === "light"
                    ? "opacity-100 text-yellow-500"
                    : "opacity-50"
                }`}
              />
              <Moon
                className={`absolute top-1 right-1 w-3 h-3 transition-all duration-300 ${
                  theme === "dark" ? "opacity-100 text-blue-400" : "opacity-50"
                }`}
              />
            </button>

            <div
              className={`h-6 w-px ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              }`}
            />

            <div className="flex items-center gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`social-icon w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-orange-400 hover:bg-gray-800"
                      : "text-gray-600 hover:text-orange-500 hover:bg-gray-100"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              theme === "dark"
                ? "text-gray-300 hover:text-white hover:bg-gray-800"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 transform ${
          theme === "dark"
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
        } border-b ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 grid gap-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white hover:bg-gray-800"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              } ${activeLink === link.href ? 'active' : ''}`}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between px-4">
            <span
              className={`text-sm font-medium ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Theme
            </span>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                theme === "dark" ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                  theme === "dark" ? "left-7" : "left-1"
                }`}
              />
              <Sun
                className={`absolute top-1 left-1 w-3 h-3 transition-all duration-300 ${
                  theme === "light"
                    ? "opacity-100 text-yellow-500"
                    : "opacity-50"
                }`}
              />
              <Moon
                className={`absolute top-1 right-1 w-3 h-3 transition-all duration-300 ${
                  theme === "dark" ? "opacity-100 text-blue-400" : "opacity-50"
                }`}
              />
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700 flex justify-center gap-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-orange-400 hover:bg-gray-800"
                    : "text-gray-600 hover:text-orange-500 hover:bg-gray-100"
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
