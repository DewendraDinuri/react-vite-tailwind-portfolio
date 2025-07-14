import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => (
  <section id="contact" className="bg-neutral-900 text-neutral-200 py-20">
    <div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-4xl font-semibold text-center mb-12">Get in Touch</h2>
      <div className="flex flex-wrap lg:space-x-12">
        {/* Info Cards */}
        <div className="w-full lg:w-1/3 space-y-6">
          {[
            { icon: MdLocationOn, title: "Location", text: "Negombo, Sri Lanka" },
            { icon: MdEmail, title: "Email", text: "your.email@example.com" },
            { icon: MdPhone, title: "Phone", text: "+94 77 123 4567" },
          ].map((info, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <info.icon className="text-3xl text-cyan-400 mt-1" />
              <div>
                <h4 className="text-xl font-medium">{info.title}</h4>
                <p className="text-neutral-400">{info.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="w-full lg:w-2/3 bg-neutral-800 p-8 rounded-2xl shadow-lg mt-10 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-cyan-400 col-span-full"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-4 bg-neutral-700 rounded-lg focus:ring-2 focus:ring-cyan-400 col-span-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
