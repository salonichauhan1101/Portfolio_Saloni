/*import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg mb-6">
                I’m a passionate <span className="font-semibold">software developer</span> with over 3 years of experience
                creating innovative solutions across <span className="font-semibold">web development, cloud infrastructure, and data analytics</span>.
                My career began with backend and database optimization, progressed into large-scale cloud migration and automation,
                and now spans <span className="font-semibold">full-stack development</span> and <span className="font-semibold">machine learning applications</span>.
              </p>

              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <ul className="list-disc list-inside space-y-2 mb-8">
                <li>
                  <span className="font-semibold">Full Stack Development</span> – Build responsive, user-friendly applications using ReactJS, Node.js, HTML, CSS, and JavaScript.
                </li>
                <li>
                  <span className="font-semibold">Cloud & DevOps</span> – Deploy and optimize solutions on AWS and Azure, leveraging CI/CD pipelines, Docker, and Kubernetes.
                </li>
                <li>
                  <span className="font-semibold">Data & AI Solutions</span> – Develop predictive models, data pipelines, and analytics dashboards using Python, R, SQL, and modern ML frameworks.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
              <ul className="list-disc list-inside space-y-2 mb-8">
                <li>Cut deployment times by <span className="font-semibold">40%</span> through Azure DevOps CI/CD automation.</li>
                <li>Boosted database query efficiency by <span className="font-semibold">25%</span> with indexing and stored procedure optimization.</li>
                <li>Delivered a <span className="font-semibold">92% accurate</span> ML model for employee attrition prediction.</li>
                <li>Led the migration of <span className="font-semibold">6+ enterprise applications</span> to Microsoft Azure.</li>
              </ul>

              <p className="text-lg">
                When I’m not coding, you’ll find me exploring emerging tech trends, mentoring aspiring developers,
                or experimenting with personal projects.
              </p>
      </div>
    </div>
  );
};

export default About;*/

import React from "react";
import { FiCpu, FiCloud, FiBarChart2, FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
        </div>

        {/* Lead paragraph */}
        <p className="text-lg md:text-xl leading-relaxed mb-10 text-white/90">
          I’m a passionate <span className="font-semibold">software developer</span> with over 3 years of experience
          creating innovative solutions across <span className="font-semibold">web development, cloud infrastructure, and data analytics</span>.
          My career began with backend and database optimization, progressed into large-scale cloud migration and automation,
          and now spans <span className="font-semibold">full-stack development</span> and <span className="font-semibold">machine learning applications</span>.
        </p>

        {/* What I Do – feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-indigo-500/20">
                <FiCpu className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Full-Stack Development</h3>
            </div>
            <p className="text-white/80">
              Build responsive, accessible apps with React, Node.js, HTML, CSS, and JavaScript—focused on performance and great UX.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <FiCloud className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
            </div>
            <p className="text-white/80">
              Ship reliably on AWS & Azure with CI/CD, Docker, and Kubernetes—scalable, secure, and cost-aware.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-pink-400/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)] transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-pink-500/20">
                <FiBarChart2 className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Data & AI Solutions</h3>
            </div>
            <p className="text-white/80">
              Predictive models, data pipelines, and analytics dashboards using Python, R, SQL, and modern ML frameworks.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h4 className="text-2xl font-semibold mb-4">Highlights</h4>
          <ul className="space-y-3">
            {[
              "Cut deployment times by 40% via Azure DevOps CI/CD automation.",
              "Boosted database query efficiency by 25% with indexing & procedure tuning.",
              "Delivered a 92%-accurate ML model for employee attrition prediction.",
              "Led migration of 6+ enterprise applications to Microsoft Azure."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <FiCheck className="mt-1 shrink-0 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>




      </div>
    </section>
  );
};

export default About;

