// import React from "react";
// import "./Skills.css";
// import "../../app.css";
// import AppWarp from "../../Higher_order_component/AppWapper";
// import { motion } from "framer-motion";
// import { images } from "../../constant";

// function Skills() {
//   const imgMotion = {
//     rest: { scale: 1 },
//     hover: {
//       scale: 1.5,
//     },
//   };

//   const spanMotion = {
//     rest: { opacity: 0 },
//     hover: {
//       opacity: 1,
//     },
//   };
//   const icons = [
//     { img: images.mongoDB, name: "MongoDB" },
//     { img: images.cpp, name: "c++" },
//     { img: images.css, name: "CSS" },
//     { img: images.figma, name: "Figma" },
//     { img: images.git, name: "Git" },
//     { img: images.graphql, name: "GraphQL" },
//     { img: images.html, name: "HTML" },
//     { img: images.javascript, name: "JavaScript" },
//     { img: images.node, name: "Node" },
//     { img: images.python, name: "Python" },
//     { img: images.react, name: "React" },
//     { img: images.redux, name: "Redux" },
//     { img: images.sass, name: "Sass" },
//     { img: images.typescript, name: "TypeScript" },
//   ];
//   return (
//     <motion.div
//       className="app__skill app__flex app__container component"
//       id="skill"
//       whileInView={{ y: [150, 0], opacity: [0, 1] }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="head-text">
//         Skills <span>And</span> Education
//       </h2>
//       <div className="app__skill-content">
//         <motion.div
//           className="app__skill-icons app__flex"
//           whileInView={{ y: [100, 0], opacity: [0, 1] }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           {icons.map((icon, index) => (
//             <motion.div
//               key={index}
//               initial="rest"
//               whileHover="hover"
//               className="app__skills-icon app__flex"
//             >
//               <motion.img
//                 variants={imgMotion}
//                 src={icon.img}
//                 alt="Skill"
//                 className="app__skills-item app__flex"
//               />
//               <motion.p variants={spanMotion} className="app__flex">
//                 <span>{icon.name}</span>
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export default AppWarp(Skills, "skill");

import React from "react";
import "./Skills.css";
import "../../app.css";
import AppWarp from "../../Higher_order_component/AppWapper";
import { motion } from "framer-motion";
import { images } from "../../constant";

function Skills() {
  const skills = {
    "Front-End Development": [
      {
        img: images.html,
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        img: images.css,
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        img: images.javascript,
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        img: images.typescript,
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      { img: images.react, name: "React", link: "https://reactjs.org/" },
      { img: images.sass, name: "Sass", link: "https://sass-lang.com/" },
      {
        img: images.tailwind,
        name: "TailwindCSS",
        link: "https://tailwindcss.com/",
      },
      { img: images.nextjs, name: "Next.js", link: "https://nextjs.org/" },
    ],
    "Back-End Development": [
      { img: images.node, name: "Node.js", link: "https://nodejs.org/" },
      {
        img: images.expressjs,
        name: "Express.js",
        link: "https://expressjs.com/",
      },
      {
        img: images.aspnet,
        name: "ASP.NET",
        link: "https://dotnet.microsoft.com/apps/aspnet",
      },
      {
        img: images.flask,
        name: "Flask",
        link: "https://flask.palletsprojects.com/en/3.0.x/",
      },
      {
        img: images.oracle,
        name: "OracleDB",
        link: "https://www.oracle.com/database/",
      },
      { img: images.mysql, name: "MySQL", link: "https://www.mysql.com/" },
      {
        img: images.postgresql,
        name: "PostgresSQL",
        link: "https://www.postgresql.org/",
      },
      {
        img: images.sqlite,
        name: "SQLite",
        link: "https://www.sqlite.org/index.html",
      },
      {
        img: images.mongodb,
        name: "MongoDB",
        link: "https://www.mongodb.com/",
      },
      {
        img: images.dynamodb,
        name: "DynamoDB",
        link: "https://aws.amazon.com/dynamodb/",
      },
    ],
    "Cloud Computing": [
      {
        img: images.azure,
        name: "Azure",
        link: "https://azure.microsoft.com/",
      },
      { img: images.aws, name: "AWS", link: "https://aws.amazon.com/" },
      {
        img: images.googlecloud,
        name: "Google Cloud",
        link: "https://cloud.google.com/",
      },
      {
        img: images.githubactions,
        name: "GitHub Actions",
        link: "https://github.com/features/actions",
      },
      { img: images.docker, name: "Docker", link: "https://www.docker.com/" },
      { img: images.nginx, name: "Nginx", link: "https://www.nginx.com/" },
      {
        img: images.firebase,
        name: "Firebase",
        link: "https://firebase.google.com/",
      },
      { img: images.linux, name: "Linux", link: "https://www.linux.org/" },
      { img: images.yaml, name: "YAML", link: "https://yaml.org/" },
    ],
    "Object Oriented Programming": [
      { img: images.cpp, name: "C++", link: "https://isocpp.org/" },
      { img: images.python, name: "Python", link: "https://www.python.org/" },
      { img: images.java, name: "Java", link: "https://www.java.com/" },
    ],
    "Collaboration and DevOps": [
      { img: images.git, name: "Git", link: "https://git-scm.com/" },
      { img: images.github, name: "GitHub", link: "https://github.com/" },
      {
        img: images.azuredevops,
        name: "Azure DevOps",
        link: "https://azure.microsoft.com/en-us/services/devops/",
      },
    ],
  };

  return (
    <motion.div
      className="app__skill app__flex app__container component"
      id="skill"
      whileInView={{ y: [150, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <h2 className="head-text">Skills</h2>
      <h4 className="blue fw-bolder">
        What I have learnt from my Education and work experience
      </h4>
      <hr className="my-4" />
      {/* <hr className="w-3/5 m-auto bg-dark" /> */}
      <div className="app__skill-content mt-5">
        {Object.keys(skills).map((category, index) => (
          <div
            key={index}
            className="skill-category d-flex .justify-content-center flex-column align-items-center"
          >
            <h3 className="blue fw-bolder">{category}</h3>
            <motion.div
              className="app__skill-icons app__flex"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {skills[category].map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial="rest"
                  whileHover="hover"
                  className="app__skills-icon app__flex d-flex flex-column"
                >
                  <a href={skill.link}>
                    <motion.img
                      // variants={imgMotion}
                      src={skill.img}
                      alt={skill.name}
                      className="app__skills-item app__flex"
                    />
                    <p className="icon_text d-flex justify-content-center">
                      {skill.name}
                    </p>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AppWarp(Skills, "skill");
