import React from "react";

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

export default About;
