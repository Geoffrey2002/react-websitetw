import React from "react";
import PageSection from "./PageSection";
import {
  FaAmazon,
  FaApple,
  FaGoogle,
  FaFacebook,
  FaSnapchatGhost,
} from "react-icons/fa";

const Customers = () => {
  const facts = [
    {
      id: 1,
      title: "$49M",
      subtitle:
        " distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      id: 2,
      title: "57%",
      subtitle:
        "normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    },
    {
      id: 3,
      title: "3 Months Later",
      subtitle:
        "long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      id: 4,
      title: "7 new countries",
      subtitle:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
  ];

  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: "google",
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: "facebook",
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: "amazon",
    },
    {
      id: 4,
      icon: <FaApple size={25} />,
      title: "apple",
    },
    {
      id: 5,
      icon: <FaSnapchatGhost size={25} />,
      title: "snapchat",
    },
  ];

  return (
    <PageSection
      name="customers"
      title="customers"
      subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.  "
    >
      <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg  "
            >
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
          {companies.map(({ id, icon, title }) => (
            <div
              className="flex items-center capitalize p-4 rounded-lg"
              key={id}
            >
              {icon}
              <p className="ml-2">{title}</p>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Customers;
