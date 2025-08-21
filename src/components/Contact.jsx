/*import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;*/

import React from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            I’m actively seeking Full - Time opportunities in Software Development, Data Science, or Cloud Engineering.<br/> Let’s connect and explore how we can collaborate!
          </p>

        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          {/* Email */}
          <a
            href="mailto:chauhan.sal@northeastern.edu"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition text-lg font-semibold"
            aria-label="Email"
          >
            <FiMail /> Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saloni-chauhan1101/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition text-lg font-semibold"
            aria-label="LinkedIn"
          >
            <FiLinkedin /> LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/salonichauhan1101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition text-lg font-semibold"
            aria-label="GitHub"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

