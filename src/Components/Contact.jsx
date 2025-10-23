import React, { useState, useEffect, useRef } from "react";
import { Send, Loader, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+92",
    phone: "",
    interest: "",
    message: "",
    newsletter: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const codeRef = useRef(null);
  const { theme } = useTheme();

  const countryCodes = [
    { code: "+92", label: "Pakistan (+92)" },
    { code: "+93", label: "Afghanistan (+93)" },
    { code: "+355", label: "Albania (+355)" },
    { code: "+213", label: "Algeria (+213)" },
    { code: "+1", label: "United States/Canada (+1)" },
    { code: "+54", label: "Argentina (+54)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+43", label: "Austria (+43)" },
    { code: "+973", label: "Bahrain (+973)" },
    { code: "+880", label: "Bangladesh (+880)" },
    { code: "+32", label: "Belgium (+32)" },
    { code: "+591", label: "Bolivia (+591)" },
    { code: "+55", label: "Brazil (+55)" },
    { code: "+359", label: "Bulgaria (+359)" },
    { code: "+237", label: "Cameroon (+237)" },
    { code: "+56", label: "Chile (+56)" },
    { code: "+86", label: "China (+86)" },
    { code: "+57", label: "Colombia (+57)" },
    { code: "+506", label: "Costa Rica (+506)" },
    { code: "+385", label: "Croatia (+385)" },
    { code: "+357", label: "Cyprus (+357)" },
    { code: "+420", label: "Czechia (+420)" },
    { code: "+45", label: "Denmark (+45)" },
    { code: "+20", label: "Egypt (+20)" },
    { code: "+358", label: "Finland (+358)" },
    { code: "+33", label: "France (+33)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+30", label: "Greece (+30)" },
    { code: "+852", label: "Hong Kong (+852)" },
    { code: "+36", label: "Hungary (+36)" },
    { code: "+91", label: "India (+91)" },
    { code: "+62", label: "Indonesia (+62)" },
    { code: "+98", label: "Iran (+98)" },
    { code: "+964", label: "Iraq (+964)" },
    { code: "+353", label: "Ireland (+353)" },
    { code: "+972", label: "Israel (+972)" },
    { code: "+39", label: "Italy (+39)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+962", label: "Jordan (+962)" },
    { code: "+7", label: "Kazakhstan (+7)" },
    { code: "+254", label: "Kenya (+254)" },
    { code: "+82", label: "Korea, South (+82)" },
    { code: "+965", label: "Kuwait (+965)" },
    { code: "+996", label: "Kyrgyzstan (+996)" },
    { code: "+961", label: "Lebanon (+961)" },
    { code: "+218", label: "Libya (+218)" },
    { code: "+60", label: "Malaysia (+60)" },
    { code: "+356", label: "Malta (+356)" },
    { code: "+52", label: "Mexico (+52)" },
    { code: "+212", label: "Morocco (+212)" },
    { code: "+95", label: "Myanmar (+95)" },
    { code: "+31", label: "Netherlands (+31)" },
    { code: "+64", label: "New Zealand (+64)" },
    { code: "+234", label: "Nigeria (+234)" },
    { code: "+47", label: "Norway (+47)" },
    { code: "+968", label: "Oman (+968)" },
    { code: "+970", label: "Palestine (+970)" },
    { code: "+507", label: "Panama (+507)" },
    { code: "+51", label: "Peru (+51)" },
    { code: "+63", label: "Philippines (+63)" },
    { code: "+48", label: "Poland (+48)" },
    { code: "+351", label: "Portugal (+351)" },
    { code: "+974", label: "Qatar (+974)" },
    { code: "+40", label: "Romania (+40)" },
    { code: "+7", label: "Russia (+7)" },
    { code: "+966", label: "Saudi Arabia (+966)" },
    { code: "+381", label: "Serbia (+381)" },
    { code: "+65", label: "Singapore (+65)" },
    { code: "+421", label: "Slovakia (+421)" },
    { code: "+27", label: "South Africa (+27)" },
    { code: "+34", label: "Spain (+34)" },
    { code: "+94", label: "Sri Lanka (+94)" },
    { code: "+46", label: "Sweden (+46)" },
    { code: "+41", label: "Switzerland (+41)" },
    { code: "+886", label: "Taiwan (+886)" },
    { code: "+255", label: "Tanzania (+255)" },
    { code: "+66", label: "Thailand (+66)" },
    { code: "+216", label: "Tunisia (+216)" },
    { code: "+90", label: "Türkiye (+90)" },
    { code: "+380", label: "Ukraine (+380)" },
    { code: "+971", label: "United Arab Emirates (+971)" },
    { code: "+44", label: "United Kingdom (+44)" },
    { code: "+598", label: "Uruguay (+598)" },
    { code: "+998", label: "Uzbekistan (+998)" },
    { code: "+58", label: "Venezuela (+58)" },
    { code: "+84", label: "Vietnam (+84)" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "firstName" || name === "lastName") {
      const sanitized = value.replace(/[^A-Za-z]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
      setErrors((prev) => ({
        ...prev,
        [name]: sanitized.length === 0 ? "Only letters allowed (no spaces)" : "",
      }));
      return;
    }
    if (name === "email") {
      const v = value.replace(/\s+/g, "");
      setFormData((prev) => ({ ...prev, email: v }));
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      setErrors((prev) => ({ ...prev, email: v.length && !re.test(v) ? "Enter a valid email" : "" }));
      return;
    }
    if (name === "countryCode") {
      setFormData((prev) => ({ ...prev, countryCode: value }));
      return;
    }
    if (name === "phone") {
      const sanitized = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, phone: sanitized }));
      setErrors((prev) => ({ ...prev, phone: value && /\D/.test(value) ? "Only numbers allowed" : "" }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  useEffect(() => {
    const handler = (e) => {
      if (codeRef.current && !codeRef.current.contains(e.target)) {
        setIsCodeOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const newErrors = {
      firstName: formData.firstName ? "" : "Only letters allowed (no spaces)",
      lastName: formData.lastName ? "" : "Only letters allowed (no spaces)",
      email: formData.email && re.test(formData.email) ? "" : "Enter a valid email",
      phone: formData.phone && /\D/.test(formData.phone) ? "Only numbers allowed" : "",
    };
    setErrors(newErrors);
    if (newErrors.firstName || newErrors.lastName || newErrors.email || newErrors.phone) {
      setFormMessage("Please fix the highlighted fields.");
      return;
    }
    setFormMessage("");
    setIsLoading(true);

    setTimeout(() => {
      setFormMessage(
        "Thanks for connecting with Wellnex! Your message means a lot — we’ll get back to you shortly."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+92",
        phone: "",
        interest: "",
        message: "",
        newsletter: false,
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className={`py-16 border-t transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-gray-200"
      }`}
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px 1000px' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs tracking-[0.18em] font-bold text-orange-500">
              Get In Touch
            </p>
            <h2
              className={`mt-2 text-2xl md:text-3xl font-extrabold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Transform Your Wellnex Journey?
            </h2>
            <p
              className={`mt-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Join our community and be the first to experience the future of
              Wellnex technology.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  aria-invalid={!!errors.firstName}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    theme === "dark"
                      ? `${errors.firstName ? "border-red-500" : "border-gray-700"} bg-gray-800 text-white placeholder-gray-400`
                      : `${errors.firstName ? "border-red-500" : "border-gray-300"} bg-white text-gray-900 placeholder-gray-500`
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  aria-invalid={!!errors.lastName}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    theme === "dark"
                      ? `${errors.lastName ? "border-red-500" : "border-gray-700"} bg-gray-800 text-white placeholder-gray-400`
                      : `${errors.lastName ? "border-red-500" : "border-gray-300"} bg-white text-gray-900 placeholder-gray-500`
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  theme === "dark"
                    ? `${errors.email ? "border-red-500" : "border-gray-700"} bg-gray-800 text-white placeholder-gray-400`
                    : `${errors.email ? "border-red-500" : "border-gray-300"} bg-white text-gray-900 placeholder-gray-500`
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Phone Number
              </label>
              <div className="flex gap-3">
                <div ref={codeRef} className="relative w-32">
                  <button
                    type="button"
                    onClick={() => setIsCodeOpen((v) => !v)}
                    className={`w-full px-3 py-3 rounded-lg border flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                      theme === "dark" ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                    }`}
                    aria-haspopup="listbox"
                    aria-expanded={isCodeOpen}
                  >
                    <span>{formData.countryCode}</span>
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </button>
                  {isCodeOpen && (
                    <div
                      className={`absolute z-20 mt-1 w-full max-h-64 overflow-auto rounded-lg border shadow-lg ${
                        theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                      }`}
                      role="listbox"
                    >
                      {countryCodes.map((c) => (
                        <button
                          key={c.code + c.label}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, countryCode: c.code }));
                            setIsCodeOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-orange-50 ${
                            theme === "dark" ? "hover:bg-gray-700 text-white" : "text-gray-900"
                          } ${formData.countryCode === c.code ? (theme === "dark" ? "bg-gray-700" : "bg-orange-50") : ""}`}
                          role="option"
                          aria-selected={formData.countryCode === c.code}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  aria-invalid={!!errors.phone}
                  className={`flex-1 px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    theme === "dark"
                      ? `${errors.phone ? "border-red-500" : "border-gray-700"} bg-gray-800 text-white placeholder-gray-400`
                      : `${errors.phone ? "border-red-500" : "border-gray-300"} bg-white text-gray-900 placeholder-gray-500`
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="interest"
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                I'm interested in *
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="">Select an option</option>
                <option value="soulwhispers">SoulWhispers App</option>
                <option value="gymkey">GymKey App</option>
                <option value="platform">Full Wellnex Platform</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                placeholder="Tell us about your Wellnex goals and how we can help..."
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className={`w-4 h-4 rounded border transition-colors focus:ring-2 focus:ring-orange-500 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-600 text-orange-500"
                    : "bg-white border-gray-300 text-orange-500"
                }`}
              />
              <label
                htmlFor="newsletter"
                className={`ml-2 text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'd like to receive updates about Wellnex Systems and Wellnex
                tips
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="gsap-btn px-12 py-5 text-lg leading-none inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            {formMessage && (
              <div
                className={`text-center p-4 rounded-lg ${
                  formMessage.includes("Thanks")
                    ? theme === "dark"
                      ? "bg-green-900/50 text-green-200 border border-green-800"
                      : "bg-green-100 text-green-800 border border-green-200"
                    : theme === "dark"
                    ? "bg-red-900/50 text-red-200 border border-red-800"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {formMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
