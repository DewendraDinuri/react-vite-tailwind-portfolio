import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index.js";

const About = () => {
  return (
    <div className="border-b-0 border-neutral-900 pb-4 lg:mb-36 lg:text-3xl">
      <h2 className="my-24 text-center text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg w-[90%] max-w-[500px]"
              src={aboutImg}
              alt="About"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 px-8 font-light tracking-tight text-justify text-base leading-relaxed text-neutral-300">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
