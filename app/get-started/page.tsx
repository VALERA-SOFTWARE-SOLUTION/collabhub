"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/collabHub_tempo_logo.jpg";

interface ApplicationMarketingTagLineProps {
  setShowProductFeatures: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApplicationMarketingTagLine: React.FC<
  ApplicationMarketingTagLineProps
> = ({ setShowProductFeatures }) => (
  <div className="flex flex-col items-center justify-center text-center h-screen">
    <Image src={Logo} alt="CollabHub Logo" width={200} height={200} />
    <h1 className="text-3xl my-5 max-w-lg mx-auto">
      Boost your freelance workflow with smart tasks, client messaging, and
      local payments—built for Filipino freelancers.
    </h1>
    <button
      className="text-lg px-5 py-2 my-3 bg-orange-500 text-white rounded"
      onClick={() => setShowProductFeatures(true)}
    >
      Get started
    </button>
  </div>
);

const ProductFeatures: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    {
      title: "Integrated Task and Project Management",
      description:
        "Freelancers can easily create, prioritize, and categorize tasks by client or project. Focus on a simple, intuitive interface to allow for easy task management.",
    },
    {
      title: "AI-Driven Task Management",
      description:
        "AI tool that suggests task prioritization, sends reminders, and helps freelancers manage workloads intelligently.",
    },
    {
      title: "Flexibility Between Individual and Team Modes",
      description:
        "Freelancers should be able to switch between solo and team modes in the MVP.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <div className="w-64 h-64 bg-gray-200 flex items-center justify-center mb-5">
        {/* Carousel placeholder here: a large square since there are no images yet */}
      </div>
      <div className="text-center mb-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${index === currentImageIndex ? "block" : "hidden"}`}
          >
            <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
            <p className="text-1xl my-5 max-w-lg mx-auto">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mb-5">
        {features.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="flex space-x-4">
        {currentImageIndex !== features.length - 1 && (
          <button
            className="px-5 py-2 bg-orange-500 text-white rounded"
            onClick={() =>
              setCurrentImageIndex((prev) => {
                if (prev !== features.length - 1) {
                  return prev + 1;
                }
                return prev;
              })
            }
          >
            Next
          </button>
        )}
        <button
          className={`px-5 py-2 ${
            currentImageIndex !== features.length - 1
              ? `bg-gray-500`
              : `bg-orange-500`
          } text-white rounded`}
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          {currentImageIndex === features.length - 1 ? "Get Started" : "Skip"}
        </button>
      </div>
    </div>
  );
};

const GetStarted: React.FC = () => {
  const [showProductFeatures, setShowProductFeatures] = useState(false);

  useEffect(() => {
    document.title = "CollabHub | Get Started";
  }, []);

  return (
    <main>
      {showProductFeatures ? (
        <ProductFeatures />
      ) : (
        <ApplicationMarketingTagLine
          setShowProductFeatures={setShowProductFeatures}
        />
      )}
    </main>
  );
};

export default GetStarted;
