/*import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;*/

import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 7, src: graphql, title: "GraphQL", style: "shadow-pink-400" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          <p className="mt-4 text-white/80 text-sm">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`group rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-2 py-3 shadow-md hover:shadow-[0_0_16px_rgba(99,102,241,0.25)] hover:border-indigo-400/50 transition ${style}`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={src}
                  alt={title}
                  className="w-10 h-10 object-contain"
                />
                <p className="mt-2 text-xs text-white/90">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
