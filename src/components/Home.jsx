/*import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-6xl sm:text-4xl font-bold text-white">
            Full Stack Developer | Cloud Engineer | Machine Learning Enthusiast
          </h4>
          <br/>
          <p className="text-gray-500 py-4 max-w-md">
  I build scalable web applications and optimize cloud infrastructure, blending expertise in modern web technologies with strong cloud and data skills.
          <br/><br/></p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
className="group text-white border border-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent hover:bg-white hover:text-black cursor-pointer"
            >
              View my work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;*/

import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Copy */}
        <div>
          <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              • Full Stack Developer <br/>• Cloud Engineer<br/> • ML Enthusiast
            </span>

          </h2>

          <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
            I build scalable web applications and optimize cloud infrastructure,
            blending modern web tech with strong cloud and data skills.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition cursor-pointer"
            >
              View my work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={22} />
              </span>
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 hover:border-white/40 transition"
            >
              Download résumé
            </a>
          </div>
        </div>

        {/* Right: Image in glass card */}
        <div className="order-first md:order-none flex justify-center">
          <div className="max-w-xs sm:max-w-sm md:max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:border-indigo-400/50 transition">
            <img
              src={HeroImage}
              alt="Saloni Chauhan"
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Optional scroll cue */}
      <div className="flex justify-center pb-8 md:pb-12">
        <Link
          to="about"
          smooth
          duration={500}
          className="text-white/60 hover:text-white/90 cursor-pointer"
        >
          <span className="inline-block animate-bounce">↓</span>
        </Link>
      </div>
    </section>
  );
};

export default Home;

