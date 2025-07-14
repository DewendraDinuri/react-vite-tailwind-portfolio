import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";          // Node.js
import { SiSpringboot } from "react-icons/si";      // Spring Boot
import { SiAnaconda } from "react-icons/si";        // Anaconda
import { FaAngular } from "react-icons/fa";         // Angular
import { TbCodeCircle } from "react-icons/tb";      // OOP (symbolic)
import { SiMongodb } from "react-icons/si";         // MongoDB
import { GrMysql } from "react-icons/gr";           // MySQL
import { BiLogoPostgresql } from "react-icons/bi";      // PostgreSQL

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-36 lg:text-3xl">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <FaNodeJs className="text-7xl  text-green-500" /> {/* Node.js green */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <SiSpringboot className="text-7xl text-[#6DB33F]" /> {/* Spring Boot green */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <FaAngular className="text-7xl text-[#DD0031]" /> {/* Angular red */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <TbCodeCircle className="text-7xl text-[#FFD700]" /> {/* OOP symbolic — gold */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <SiAnaconda className="text-7xl text-green-500" /> {/* Anaconda green */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <SiMongodb className="text-7xl t text-green-500" /> {/* MongoDB green */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" /> {/* PostgreSQL blue */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-700 p-4">
          <GrMysql className="text-7xl text-[#00758F]" /> {/* MySQL blue */}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
