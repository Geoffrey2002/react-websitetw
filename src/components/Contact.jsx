import React from "react";
import PageSection from "./PageSection";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactImg from "../assets/contact-us.jpg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="contact"
      subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  "
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* left */}

        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={ContactImg}
            alt="photo"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple "
          />
          <p className="py-12 max-w-md">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet
          </p>
          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaLinkedin size={25} />
            </div>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaTwitter size={25} />
            </div>
          </div>
        </div>
        {/* right */}

        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
