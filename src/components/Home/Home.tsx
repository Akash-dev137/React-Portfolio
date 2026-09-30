import { FaDownload, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import image from "../../assets/akash.png";
import resume from "../../assets/AkashResume.pdf";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import styles from "./Home.module.css";
import TextType from "../ui components/TypeText/TextType";

const Home = () => {
  return (
    <div id="home" className="min-h-screen scroll-mt-10 md:scroll-mt-20 ">
      <div  
        className="flex flex-col p-5 lg:flex-row lg:p-15 z-50"
        style={{ marginTop: "45px" }}
      >
        <div className="z-50 border border-white p-5 rounded-xl md:!border-0 lg:w-[850px]">
          <div className="flex flex-col text-[55px] font-bold md:text-[80px] md:flex-row ">
            <TextType text="Hi I'm Akash R"/>
          </div>
          
          <p className="text-white text-[18px] font-bold md:text-xl">
            B.Sc. Computer Science Student
          </p>
          <p className="text-white text-[18px] font-bold md:text-xl">
            Aspiring Python Full Stack Developer
          </p>
          <p className=" text-[red] text-[15px]">
            I love building web applications and working on real-world projects.
            I enjoy solving problems, learning new technologies, and turning
            ideas into impactful digital solutions.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              download={{}}
              href={resume}
              className={`${styles.btns} text-[13px] text-white font-bold flex items-center gap-2 border rounded p-1 md:text-sm md:p-2 lg:text-[18px]`}
              style={{ textDecoration: "none", borderColor: "red" }}
            >
              Download Resume <FaDownload />
            </a>
            <a
              href="#contact"
              className={`${styles.btns} text-[13px] text-white font-bold flex items-center gap-2 border rounded p-1 md:text-sm lg:text-[18px]`}
              style={{ textDecoration: "none" }}
            >
              Let's Connect
              <FaTelegramPlane />
            </a>
          </div>
          <div className="flex gap-4 p-[10px] mt-4">
            <a className={`text-[28px] p-2 ${styles.link}`} href="">
              <FaSquareGithub />
            </a>
            <a className={`text-[28px] p-2 ${styles.link}`} href="">
              <FaLinkedin />
            </a>
            <a className={`text-[28px] p-2 ${styles.link}`} href="">
              <SiLeetcode />
            </a>
            <a className={`text-[28px] p-2 ${styles.link}`} href="">
              <FiMail />
            </a>
          </div>
        </div>
        <div
          className="hidden xl:block z-50 flex p-10 mr-20 w-auto rounded-[50px] "
          style={{ height: "fit-content" }}
        >
          <img
            src={image}
            className="rounded-[70px] w-[400px] bg-[red] border border-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
