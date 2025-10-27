import {useRef, useState, useEffect} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {
  FaDiscord,
  FaBell,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export function ContactUs() {
  const containerRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "< Join Codeshack />";

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for the sliding animation
  const socialY = useTransform(scrollYProgress, [0, 1], [400, 0]);

  // Typewriter effect with loop
  useEffect(() => {
    let timeout;

    if (!isDeleting && currentIndex < fullText.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, 100);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && currentIndex === 0) {
      // Reset for next cycle
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - 100vh - Fixed/Static */}
      <section className="h-screen overflow-hidden sticky top-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="CodeShack Community"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight whitespace-nowrap">
              <span className="inline-block">
                {displayText.split("").map((char, index) => {
                  // Find the position of "Codeshack" in the full text
                  const codeshackStart = fullText.indexOf("Codeshack");
                  const codeshackEnd = codeshackStart + "Codeshack".length;

                  // Check if current character is part of "Codeshack"
                  const isCodeshackChar =
                    index >= codeshackStart && index < codeshackEnd;

                  return (
                    <span
                      key={index}
                      className={
                        isCodeshackChar ? "text-blue-400" : "text-white"
                      }
                    >
                      {char}
                    </span>
                  );
                })}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 font-light">
              Connect, Learn, and Grow with Us
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                <FaDiscord className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Join Discord</span>
              </button>

              <button className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <FaBell className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Get Updates</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section - Slides up from bottom */}
      <motion.section
        className="relative z-20 h-screen bg-linear-to-br from-black via-gray-900 to-black"
        style={{
          y: socialY,
        }}
      >
        <div className="container mx-auto px-6 py-20 h-full flex flex-col justify-center">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Connect with Our Community
            </h2>
            <p className="text-xl text-gray-300">
              Join us on different platforms and stay updated
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Discord */}
            <motion.div
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{y: -10, scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                <FaDiscord className="text-3xl text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Discord
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Join our community discussions
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{y: -10, scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <FaWhatsapp className="text-3xl text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Quick updates and reminders
              </p>
            </motion.div>

            {/* GitHub */}
            <motion.div
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{y: -10, scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                <FaGithub className="text-3xl text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                GitHub
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Explore our projects
              </p>
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{y: -10, scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <FaLinkedin className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                LinkedIn
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Professional networking
              </p>
            </motion.div>

            {/* Instagram */}
            <motion.div
              className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{y: -10, scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors duration-300">
                <FaInstagram className="text-3xl text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Instagram
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Behind the scenes
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-8">
              Choose your preferred platform and become part of our growing
              community
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join All Platforms
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
