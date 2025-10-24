import React from "react";
import {
  Heart,
  Link2,
  Headset,
  Phone,
  Mail,
  Globe,
  Send,
  ChevronRight,
  FileText,
  HelpCircle,
  Shield,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#apps", label: "Apps" },
    { href: "#why", label: "Why Wellnex" },
    { href: "#next", label: "What's Next" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const supportLinks = [
    { href: "#contact", label: "Contact", icon: Mail },
    { href: "#", label: "Terms & Policy", icon: FileText },
    { href: "#", label: "FAQ", icon: HelpCircle },
    { href: "#", label: "Privacy", icon: Shield },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-orange-500" />
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-orange-500" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-orange-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Brand Section */}
          <div className="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500">
                <Heart className="text-white text-lg" />
              </div>
              <span className="text-2xl font-extrabold">
                Wellnex <span className="text-orange-500">Systems</span>
              </span>
            </div>
            <p
              className={`text-sm leading-relaxed mb-6 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Empowering Wellnex through cutting-edge technology and innovative
              solutions.
            </p>

            {/* Newsletter Signup */}
            <div
              className={`p-4 rounded-xl border transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h4
                className={`font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Stay Updated
              </h4>
              <p
                className={`text-xs mb-3 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Get the latest Wellnex insights
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className={`flex-1 px-3 py-2 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                />
                <button className="px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-up">
            <h3
              className={`font-bold text-lg mb-6 flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Link2 className="text-orange-500 w-4 h-4" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`footer-link text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="fade-up">
            <h3
              className={`font-bold text-lg mb-6 flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Headset className="text-orange-500 w-4 h-4" />
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <link.icon className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="fade-up">
            <h3
              className={`font-bold text-lg mb-6 flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <Phone className="text-orange-500 w-4 h-4" />
              Contact
            </h3>
            <div className="space-y-4">
              <div
                className={`flex items-center gap-3 p-3 rounded-xl hover:scale-105 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-gray-50 border-gray-200"
                } border`}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500">
                  <Mail className="text-white w-4 h-4" />
                </div>
                <div>
                  <p
                    className={`text-xs font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    info@wellnexsystems.com
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 p-3 rounded-xl hover:scale-105 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-gray-50 border-gray-200"
                } border`}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500">
                  <Globe className="text-white w-4 h-4" />
                </div>
                <div>
                  <p
                    className={`text-xs font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Website
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    www.wellnexsystems.com
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4
                  className={`font-semibold mb-3 text-sm ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Follow Us
                </h4>
                <div className="flex items-center gap-3 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-orange-400"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-orange-500"
                      }`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t pt-8 ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-6 flex-wrap">
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © {new Date().getFullYear()} Wellnex Systems. All rights
                reserved.
              </p>
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="#"
                  className={`footer-link text-xs hover:text-orange-500 transition-colors ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className={`footer-link text-xs hover:text-orange-500 transition-colors ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className={`footer-link text-xs hover:text-orange-500 transition-colors ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Made with
              </span>
              <Heart className="text-orange-500 w-3 h-3" />
              <span
                className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                for Wellnex
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
