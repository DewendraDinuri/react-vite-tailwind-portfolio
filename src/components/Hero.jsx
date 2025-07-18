import { HERO_CONTENT } from "../constants"
import porfilePic from "../assets/kevinRushProfile.png"

const Hero = () => {
  return  <div className="border-b-0 border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-32 lg:text-7xl text-white px-16">Dinza Dewen</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent px-16">Software Engineer</span>
                <p className="my-2 max-w-l py-6 font-light tracking-tighter text-justify px-16">{HERO_CONTENT}</p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <img src={porfilePic} alt="KevinRush Profile Picture"/>
        </div>
        </div>
    </div>
  </div>
}

export default Hero