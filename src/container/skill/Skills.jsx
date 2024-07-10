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
  const imgMotion = {
    rest: { scale: 1 },
    hover: {
      scale: 1.5,
    },
  };

  const spanMotion = {
    rest: { opacity: 0 },
    hover: {
      opacity: 1,
    },
  };

  const skills = {
    "Front-End Development": [
      { img: images.html, name: "HTML" },
      { img: images.css, name: "CSS" },
      { img: images.javascript, name: "JavaScript" },
      { img: images.typescript, name: "TypeScript" },
      { img: images.angular, name: "Angular" },
      { img: images.react, name: "React" },
      { img: images.sass, name: "Sass" },
      { img: images.tailwindcss, name: "TailwindCSS" },
      { img: images.rxjs, name: "RxJS" },
      { img: images.nextjs, name: "Next.js" },
    ],
    "Back-End Development": [
      { img: images.node, name: "Node.js" },
      { img: images.express, name: "Express.js" },
      { img: images.aspnet, name: "ASP.NET" },
      { img: images.oracledb, name: "OracleDB" },
      { img: images.mysql, name: "MySQL" },
      { img: images.postgresql, name: "PostgresSQL" },
      { img: images.sqlite, name: "SQLite" },
      { img: images.mongodb, name: "MongoDB" },
      { img: images.dynamodb, name: "DynamoDB" },
      { img: images.pnpm, name: "PNPM" },
    ],
    "Cloud Computing": [
      { img: images.aws, name: "AWS" },
      { img: images.azure, name: "Azure" },
      { img: images.googlecloud, name: "Google Cloud" },
      { img: images.githubactions, name: "Github Actions" },
      { img: images.docker, name: "Docker" },
      { img: images.nginx, name: "Nginx" },
      { img: images.firebase, name: "Firebase" },
      { img: images.linux, name: "Linux" },
      { img: images.yaml, name: "YAML" },
      { img: images.cloudflare, name: "Cloudflare Workers" },
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
                  <motion.img
                    // variants={imgMotion}
                    src={skill.img}
                    alt={skill.name}
                    className="app__skills-item app__flex"
                  />
                  <p className="icon_text">{skill.name}</p>
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
