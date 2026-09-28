import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center fixed top-0 left-0 w-full  h-15 z-54 bg-transparent">
        <nav className="hidden md:flex justify-center items-center w-full ">
          <div
            className="fixed top-1 "
            style={{ height: "6px", position: "relative" }}
          >
            <nav className={`${styles.navbar} flex justify-around border-1 border-[red] w-[500px] bg-white/30 p-2 rounded-full`}>
              <a href="#home">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>
            </nav>
            
          </div>
        </nav>
        <button
          className="md:hidden text-white pl-5"
          onClick={() => setIsOpen(true)}
        >
          <TbMenu2 className="text-4xl" />
        </button>
      </div>

      <div
        className={`
          fixed top-0 left-0 h-full w-90
          bg-black
          z-[60]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="text-4xl" />
        </button>
        <div id="slider" className={styles.slider}>
          <ul
            className="flex flex-col text-xl list-none"
            style={{ paddingLeft: "0", marginTop: "80px", background: "black" }}
          >
            <li style={{ padding: "20px" }}>
              <a
                href="#home"
                style={{ padding: "20px" }}
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="#about"
                style={{ padding: "20px" }}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="#skills"
                style={{ padding: "20px" }}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="#projects"
                style={{ padding: "20px" }}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="#certifications"
                style={{ padding: "20px" }}
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </a>
            </li>

            <li style={{ padding: "20px" }}>
              <a
                href="#contact"
                style={{ padding: "20px" }}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
