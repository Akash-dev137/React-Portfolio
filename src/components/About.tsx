import Heading from "./Heading";

const About = () => {
  return (
    <div className="p-5 min-h-screen scroll-mt-20 md:scroll-mt-10 md:hidden" id="about">
      <Heading title="About Me" />
      <div className="bg-[red] p-5 border relative rounded-xl z-50">
        <div className="text-[16px]">

        <p className="text-white text-[18px]">
          I'm Akash R, a B.Sc. Computer Science student with a strong interest
          in software development and modern web technologies. I enjoy turning
          ideas into practical applications and continuously improving my
          programming and problem-solving skills.
        </p>
        <p className="text-white text-[18px]">
          I have experience building projects using Python, HTML, CSS,
          JavaScript,React.js, Django, MySQL, and Streamlit.
        </p>
        <p className="text-white text-[18px]">
          My goal is to start my career as a Python Full Stack Developer, where I can
          contribute to impactful software solutions while continuing to learn
          and improve.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
