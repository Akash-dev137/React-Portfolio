import Heading from "./Heading";
import "./about.css";
import { HiAcademicCap } from "react-icons/hi2";
import { FaUniversity } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  return (
    <div className="p-5 min-h-screen scroll-mt-20 md:scroll-mt-0" id="about">
      <Heading title="About Me" />
      <p className="hidden md:block text-[60px] text-white relative font-bold z-52 p-5 pb-0">
        About
      </p>

      <div className="flex flex-col gap-10 md:flex-row md:p-5">
        <div className="bg-[red] p-5 border md:w-[50%] relative  rounded-3xl z-50">
          <div className="text-[16px]">
            <p className="text-white text-[18px]">
              I'm Akash R, a B.Sc. Computer Science student with a strong
              interest in software development and modern web technologies. I
              enjoy turning ideas into practical applications and continuously
              improving my programming and problem-solving skills.
            </p>
            <p className="text-white text-[18px]">
              I have experience building projects using Python, HTML, CSS,
              JavaScript,React.js, Django, MySQL, and Streamlit.
            </p>
            <p className="text-white text-[18px]">
              My goal is to start my career as a Python Full Stack Developer,
              where I can contribute to impactful software solutions while
              continuing to learn and improve.
            </p>
          </div>
        </div>

        <div className="text-white text-[14px] md:text-[16px] md:flex-col md:flex gap-3 z-52 md:w-[50%] p-3 md:p-5 bg-black border rounded-3xl">
          <div className="flex items-center p-2">
            <HiAcademicCap className="text-[25px] md:text-[30px]" />
            <span>Degree :</span> B.Sc. Computer Science
          </div>
          <div className="flex items-center p-2">
            <FaUniversity className="text-[20px] md:text-[30px]" />
            <span>College :</span>
            <span
              className="hidden md:block text-white"
              style={{ fontWeight: "normal" }}
            >
              Hindustan Institute of Technology and Science
            </span>
            <span
              className="md:hidden text-white"
              style={{ fontWeight: "normal" }}
            >
              Hindustan University, Chennai
            </span>
          </div>
          <div className="flex items-center p-2">
            <RiCodeBoxFill className="text-[20px] md:text-[30px]" />
            <span>Intrest :</span>
            <span
              className="hidden md:block text-white"
              style={{ fontWeight: "normal" }}
            >
              Python, Full Stack Development, Backend Development
            </span>
            <span
              className="md:hidden text-white"
              style={{ fontWeight: "normal" }}
            >
              Python, Full Stack, web Development
            </span>
          </div>
          <div className="flex items-center p-2">
            <FaGlobe className="text-[20px] md:text-[30px]" />
            <span>Languages: </span>English, Tamil
          </div>
          <div className="flex items-center p-2">
            <FaLocationDot className="text-[20px] md:text-[30px]" />
            <span>Location: </span>Chennai, Tamil Nadu
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
