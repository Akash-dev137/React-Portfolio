import Heading from "../Heading";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="scroll-mt-10 p-15 mt-10 md:scroll-mt-0 md:mt-0 relative z-52 "
    >
      <Heading title="Contact" />
      <p className="hidden md:block text-[60px]  text-white font-bold">
        Contact
      </p>
      <div className="flex flex-col md:flex-row justify-center"> 
        <div className="relative z-52 text-white mt-5 md:mt-0 md:w-[50%]">
          <ContactForm />
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
