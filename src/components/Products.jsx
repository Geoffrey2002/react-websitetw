import React from "react";
import PageSection from "./PageSection";
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "Rocket Manufacturing",
      subtitle:
        "Comprehensive Liquid Rocket Engine testing is essential to risk reduction for Space Flight. Test capability represents significant national investments in expertise and infrastructure. Historical experience underpins current test capabilities. Test facilities continually seek proactive alignment with national space development goals and objectives including government and commercial sectors.",
    },
    {
      id: 2,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "Web Satellite",
      subtitle:
        "Comprehensive Liquid Rocket Engine testing is essential to risk reduction for Space Flight. Test capability represents significant national investments in expertise and infrastructure. Historical experience underpins current test capabilities. Test facilities continually seek proactive alignment with national space development goals and objectives including government and commercial sectors.",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "Market Initialization",
      subtitle:
        "Comprehensive Liquid Rocket Engine testing is essential to risk reduction for Space Flight. Test capability represents significant national investments in expertise and infrastructure. Historical experience underpins current test capabilities. Test facilities continually seek proactive alignment with national space development goals and objectives including government and commercial sectors.",
    },
    {
      id: 4,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "Data Fetching",
      subtitle:
        "Comprehensive Liquid Rocket Engine testing is essential to risk reduction for Space Flight. Test capability represents significant national investments in expertise and infrastructure. Historical experience underpins current test capabilities. Test facilities continually seek proactive alignment with national space development goals and objectives including government and commercial sectors.",
    },
  ];

  return (
    <PageSection
      name="products"
      title="products"
      subtitle={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Products;
