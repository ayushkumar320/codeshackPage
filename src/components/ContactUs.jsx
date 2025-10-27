import {FaDiscord, FaBell} from "react-icons/fa";

export function ContactUs() {
  return (
    <div className="relative">
      {/* Hero Section - 100vh */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image/Video */}
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              &lt; Join <span className="text-blue-400">Codeshack </span>/&gt;
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
    </div>
  );
}
