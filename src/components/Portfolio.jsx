import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import kanbas from "../assets/kanbas.png";
import empatt from "../assets/empatt.png";
import pred from "../assets/pred.png";

/*const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;*/

const projects = [
  {
    id: 1,
    title: "Kanbas LMS",
    desc: "Interactive learning platform with React + Node, auth, and state mgmt.",
    tech: ["React", "Node.js", "Redux", "Netlify"],
    img: kanbas,
    //demo: "https://your-kanbas-demo.vercel.app",
    code: "https://github.com/salonichauhan1101/kanbas-react-web-app",
  },
  {
    id: 2,
    title: "Employee Attrition ML",
    desc: "92% accuracy using XGBoost, SHAP explainability, SMOTE balancing.",
    tech: ["Python", "Pandas", "XGBoost", "SHAP"],
    img: empatt,
    //demo: "https://your-attrition-demo.vercel.app", // optional
    code: "https://github.com/salonichauhan1101/Employee_Attrition_Prediction",
  },
  {
    id: 3,
    title: "House Price Prediction",
    desc: "Regression pipeline + Flask UI for interactive predictions.",
    tech: ["Flask", "HTML/CSS", "JavaScript"],
    img: pred,
    //demo: "https://your-houseprice-demo.vercel.app",
    code: "https://github.com/salonichauhan1101/house-price-prediction",
  },

];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        <div className="mb-8">
          <h2 className="text-4xl font-bold inline bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="h-1 w-24 mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          <p className="mt-4 text-white/90">
            A few projects I’m proud of — live demos and source links below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, desc, tech, img, demo, code }) => (
            <article
              key={id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition"
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-60 object-cover hover:scale-105 duration-300"
                />
              </div>

              <div className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/80">{desc}</p>

                {/* Tech chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {tech.map(t => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-5 flex justify-center">
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 border border-white/20 hover:border-white/40 transition"
                    aria-label={`${title} source code`}
                  >
                    <FiGithub /> Code
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
