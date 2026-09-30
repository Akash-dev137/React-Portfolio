import Heading from "../Heading";
import { FlipCard } from "./flip-card";
import Portfolio from "../../assets/Projects/PortfolioV2.png";
import AIDatalyze from "../../assets/Projects/ai-home.png";
import ChatApp from "../../assets/Projects/chat-login.png";

const Project = () => {
  const projects = [
    {
      name: "Portfolio",
      image: Portfolio,
      bio: `A modern and responsive portfolio website developed to showcase my skills, projects, certifications, and achievements.
          The website provides recruiters with an overview of my technical background and development experience.`,
      github: "https://github.com/Akash-dev137/React-Portfolio",
      live: "https://akash-portfolio-akash-dev137.vercel.app/",
    },
    {
      name: "AI Datalyze",
      image: AIDatalyze,
      bio: `An AI-powered web application designed to simplify data analysis and machine learning for users without requiring extensive programming knowledge.
The application enables users to upload datasets, explore insights, clean data, create visualizations, and generate predictions through an interactive interface.`,
      github: "https://github.com/Akashram2007/AI-Datalyze",
      live: "https://ai-datalyze.streamlit.app/",
    },
    {
      name: "Python Chat App",
      image: ChatApp,
      bio: `A desktop-based real-time group chat application that enables multiple users to communicate over a local network.
The application provides an intuitive graphical interface and supports simultaneous messaging using socket programming.`,
      github: "https://github.com/Akashram2007/tkinter-chat-app",
    },
  ];

  return (
    <div id="projects" className="min-h-screen p-10  relative z-52">
      <Heading title="Projects" />
      <br />
      <br />
      <p className="hidden md:block text-[60px] text-white font-bold p-5">
        Projects
      </p>
      <div className="md:flex justify-center">

      <div className="flex flex-col justify-center items-center relative z-52 text-white  py-3 p-3 rounded-xl md:flex-row flex-wrap gap-4">
        {projects.map((project) => (
          <FlipCard data={project} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Project;
