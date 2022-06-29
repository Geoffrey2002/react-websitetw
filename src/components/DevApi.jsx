import React from "react";
import codeImage from "../assets/code.jpg";
import PageSection from "./PageSection";

const DevApi = () => {
  return (
    <PageSection
      name="developer API"
      title="Developer API"
      subtitle="Comprehensive Liquid Rocket Engine testing is essential to risk reduction for Space Flight. Test capability represents significant national investments in expertise and infrastructure. Historical experience underpins current test capabilities. "
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            A paragraph is a series of sentences that are organized and
            coherent, and are all related to a single topic.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            A paragraph is a series of sentences that are organized and
            coherent, and are all related to a single topic.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            A paragraph is a series of sentences that are organized and
            coherent, and are all related to a single topic.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            A paragraph is a series of sentences that are organized and
            coherent, and are all related to a single topic.
          </p>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
