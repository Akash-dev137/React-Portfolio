import Heading from "../Heading";
import CertificateCard from "./CertificateCard";
import DSA_Certificate from "../../assets/certificats/dsa.png";
import DS_Certificate from "../../assets/certificats/data-science.png";
import Python_Certificate from "../../assets/certificats/python-intern.png";

const Certification = () => {
  const certificates = [
    {
      title: "Programming, Data Structures and Algorithms ",
      img: DSA_Certificate,
      desc: "NPTEL – IIT Madras | 2026 | 8 Weeks | 61%",
    },
    {
      title: "Python for Data Science",
      img: DS_Certificate,
      desc: "NPTEL – IIT Madras | 2025 | 4 Weeks | 67%",
    },
    {
      title: "Python Developer Internship",
      img: Python_Certificate,
      desc: "Elevate  Labs | 2025 | 1 Month",
    },
  ];

  return (
    <div
      id="certifications"
      className="min-h-screen scroll-mt-20 mt-20 md:scroll-mt-0 md:mt-0 relative z-52 "
    >
      <Heading title="Certifications" />
      <div className="p-15">
        <p className="hidden md:block text-[60px] text-white font-bold p-5">
          Certifications
        </p>
        <div className="flex flex-col md:flex-row  gap-4 w-full justify-center items-center">
          {certificates.map((certificate) => (
            <CertificateCard
              title={certificate.title}
              img={certificate.img}
              desc={certificate.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
