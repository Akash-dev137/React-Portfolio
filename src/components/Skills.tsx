
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import Heading from "./Heading";
import SkillCard from "./SkillCard/SkillCard";

export interface Skill {
  name: string;
  icon: React.JSX.Element;
}

const Skills = () => {
  const frontend = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <IoLogoCss3 /> },
    { name: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React.js", icon: <FaReact /> },
  ];

  const backend = [
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <BiLogoDjango /> },
    { name: "MySQL", icon: <GrMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VSCode", icon: <VscVscode /> },
  ];

  return (
    <div id="skills" className="min-h-screen scroll-mt-20 md:scroll-mt-0 relative z-52 ">
      <Heading title="Skills" />
      <div className="p-10">
        <p className="hidden md:block text-[60px] text-white font-bold p-5">Skills</p>
        <div className="md:flex-col">
          <SkillCard title="FrontEnd" images={frontend} />
          <SkillCard title="BackEnd" images={backend} />
          <SkillCard title="Tools" images={tools} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
