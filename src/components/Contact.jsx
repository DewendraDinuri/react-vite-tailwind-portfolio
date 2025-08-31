import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import porfilePic from "../assets/kevinRushProfile.png"


const ContactMe = () => {
  return (
    <section id="contact" className="w-full text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="my-20 text-center text-4xl mb-4">
          Contact <span className="text-neutral-500">Me</span>
        </h2>
        <p className="text-center text-sm text-purple-900 tracking-widest mb-12 uppercase">
          Let's work together
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Profile Box */}
          <div className="flex flex-col justify-between bg-white/10 border border-purple-900 rounded-3xl p-16 backdrop-blur-md shadow-xl text-center">
            <div>
              <div className="w-32 h-32 mx-auto mb-10">
                <img
                  src={porfilePic} alt="KevinRush Profile Picture"
                  className="w-full h-full object-cover rounded-full shadow-md border-2 border-purple-500"
                />
              </div>
              <h3 className="text-2xl font-semibold text-purple-200">
                Dinuri Dewendra
              </h3>
              <p className="text-sm text-gray-400 mb-2">Software Engineer</p>
              <p className="text-gray-400 text-sm mb-6 text-justify">
                I’m open to freelance opportunities and collaborative projects where creativity meets innovation. Whether it’s building a dynamic web application, developing intelligent software solutions, or contributing to meaningful tech projects, I’m excited to bring ideas to life. Let’s connect and create something impactful together!
              </p>
            </div>

            <div className="space-y-1 text-sm text-gray-300 mt-4">
              <p>
                <span className="text-purple-400">📞</span> +94 712 345 678
              </p>
              <p>
                <span className="text-purple-400">✉️</span> dinuri@example.com
              </p>
            </div>

            {/* Social Media Section */}
            <div className="mt-8 text-left">
              <div className="flex gap-4 justify-center">
                <div className="w-12 h-12 bg-[#0b0b0b] rounded-xl flex items-center justify-center text-purple-300 hover:text-white hover:shadow-purple-500/50 shadow-md transition duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="w-12 h-12 bg-[#0b0b0b] rounded-xl flex items-center justify-center text-purple-300 hover:text-white hover:shadow-purple-500/50 shadow-md transition duration-300">
                  <FaYoutube />
                </div>
                <div className="w-12 h-12 bg-[#0b0b0b] rounded-xl flex items-center justify-center text-purple-300 hover:text-white hover:shadow-purple-500/50 shadow-md transition duration-300">
                  <FaFacebookF />
                </div>
                <div className="w-12 h-12 bg-[#0b0b0b] rounded-xl flex items-center justify-center text-purple-300 hover:text-white hover:shadow-purple-500/50 shadow-md transition duration-300">
                  <FaTwitter />
                </div>
                <div className="w-12 h-12 bg-[#0b0b0b] rounded-xl flex items-center justify-center text-purple-300 hover:text-white hover:shadow-purple-500/50 shadow-md transition duration-300">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="flex flex-col justify-between bg-white/10 border border-purple-900 rounded-3xl p-8 backdrop-blur-md shadow-xl space-y-6">
            <div>
              <label className="text-sm text-gray-300">Your Name</label>
              <input
                type="text"
                className="mt-1 w-full bg-white/10 border border-neutral-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                placeholder="Dinuri Dewendra"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Your Email</label>
              <input
                type="email"
                className="mt-1 w-full bg-white/10 border border-neutral-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone Number</label>
              <input
                type="tel"
                className="mt-1 w-full bg-white/10 border border-neutral-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                placeholder="+94..."
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Your Message</label>
              <textarea
                rows="5"
                className="mt-1 w-full bg-white/10 border border-neutral-700 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700 focus:outline-none"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-900 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
