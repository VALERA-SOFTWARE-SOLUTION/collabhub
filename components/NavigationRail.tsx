"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaTasks,
  FaComments,
  FaProjectDiagram,
  FaCog,
  FaPlus,
} from "react-icons/fa";

const NavigationRail = () => {
  const links = [
    {
      icon: <FaTasks />,
      text: "Tasks",
      link: "/live/tasks",
    },
    {
      icon: <FaComments />,
      text: "Chat",
      link: "/live/chat",
    },
    {
      icon: <FaProjectDiagram />,
      text: "Projects",
      link: "/live/projects",
    },
    {
      icon: <FaCog />,
      text: "Settings",
      link: "/live/settings",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center bg-gray-800 text-white h-screen p-5">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">CollabHub</h1>
      </div>
      <button className="bg-orange-500 rounded-full p-2 mb-8">
        <FaPlus className="text-white" />
      </button>
      <ul className="space-y-6">
        {links.map((link, index) => {
          const isActive =
            pathname.includes(link.link)
              ? true
              : false;
          return (
            <li
              key={index}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 relative hover:bg-gray-700 cursor-pointer`}
              onClick={() => {
                router.push(link.link);
              }}
            >
              {link.icon}
              <span>{link.text}</span>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 w-1/4 h-1 bg-orange-500 transform -translate-x-1/2"></span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationRail;
