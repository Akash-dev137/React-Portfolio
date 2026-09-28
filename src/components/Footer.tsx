import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
        <div className="w-full flex flex-col gap-1 items-center justify-center  md:flex-row  md:h-[60px] md:justify-evenly flex-wrap h-fit md:items-center p-5 text-white bg-black relative z-52">
          <div className="flex gap-1 justify-center items-center">
            <IoIosMail /> <span>akashgram0103@gmail.com</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <FaPhoneAlt /><span>+91 8248617554</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <FaLocationDot /><span> Chennai, Tamil Nadu</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <FaLinkedin /><span>linkedin.com/in/akash-dev137</span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <FaGithub /><span>github.com/Akashram2007</span>
          </div>
        </div>
  )
}

export default Footer